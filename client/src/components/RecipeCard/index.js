import { React } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { REMOVE_RECIPE } from "../../utils/mutations";

import Auth from "../../utils/auth";

import { Card } from "antd";

import { Button, Dropdown } from "antd";


function RecipeCard(recipe) {
  const user = Auth.getProfile();
  const userId = user.data._id;

  // destructure the passed in recipe object
  const { _id, image, name, cookTime, cookTimeUnit, chefId } = recipe;

  const [deleteRecipe, { error }] = useMutation(REMOVE_RECIPE);
  const deleteYourRecipe = async (recipeId) => {
    const userData = await deleteRecipe({
      variables: { recipeId, chefId },
    });
    window.location.assign("/profile");
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          onClick={() => {
            return window.location.assign(`/edit-recipe/${_id}`);
          }}
        >
          Edit Recipe
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          onClick={() => {
            deleteYourRecipe(_id);
          }}
        >
          Delete Recipe
        </a>
      ),
    },
  ];

  const isUsersRecipe = chefId === userId;

  return (
    <Card title={name} bordered={false}>
      <Link to={`/recipes/${_id}`}>
        <p>
          {cookTime} {cookTimeUnit}
        </p>
        <img src={image} />
      </Link>
      {isUsersRecipe && (
        <Dropdown menu={{ items }} placement="bottom">
          <Button>options</Button>
        </Dropdown>
      )}
    </Card>
  );
}

export default RecipeCard;
