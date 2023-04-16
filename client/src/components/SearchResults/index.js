// SearchResults component to display search results based on user's input, showing recipes in a list or grid view/
// card

import React, { useEffect } from "react";
// import SearchResults from "../SearchResults";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_RECIPES } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_RECIPES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";

function SearchResults() {
  const [state, dispatch] = useStoreContext();

  const { searchTerm } = state;

  const { loading, data } = useQuery(QUERY_ALL_RECIPES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_RECIPES,
        recipes: data.recipes,
      });
      data.recipes.forEach((recipe) => {
        idbPromise("recipes", "put", recipe);
      });
    } else if (!loading) {
      idbPromise("recipes", "get").then((recipes) => {
        dispatch({
          type: UPDATE_RECIPES,
          recipes: recipes,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterRecipes() {
    if (!searchTerm) {
      return state.recipes;
    }

    return state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="my-2">
      <h2>Search Results:</h2>
      {state.recipes.length ? (
        <div className="flex-row">
          {filterRecipes().map((recipe) => (
            <RecipeItem
              key={recipe._id}
              _id={recipe._id}
              image={recipe.image}
              title={recipe.title}
              description={recipe.description}
            />
          ))}
        </div>
      ) : (
        <h3>No recipes found!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default SearchResults;
