import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { idbPromise } from "../../utils/helpers";

import { Card } from "antd";
const { Meta } = Card;

function DisplayRecipe() {
  const { id } = useParams();

  const [singleRecipe, setRecipe] = useState({});

//  this useEffect gets the recipe from the database and set it to the state
  useEffect(() => {
    async function getRecipe() {
      const recipes = await idbPromise("recipes", "get");
      const singleRecipe = await recipes.filter(
        (recipe) => recipe._id === id
      )[0];
      setRecipe(singleRecipe);
    }
    getRecipe();
  }, []);

  return (
    <div>
      {singleRecipe.name ? (
        <Card style={{ width: "100%" }}>
          <Meta
            title={singleRecipe.name}
            description={singleRecipe.description}
          />
          <h2>Cook Time</h2>
          <p>
            {singleRecipe.cookTime.amount} {singleRecipe.cookTime.unit}
          </p>
          <h2>Ingredients</h2>
          <ul>
            {singleRecipe?.ingredients?.map((ingredient) => (
              <li>
                {" "}
                {ingredient?.quantity} {ingredient?.unit} {ingredient?.name}
              </li>
            ))}
          </ul>
          <h2>Instructions</h2>
          <ol>
            {singleRecipe?.instructions?.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ol>
        </Card>
      ) : (
        <h3>No Recipe Found</h3>
      )}
    </div>
  );
}

export default DisplayRecipe;
