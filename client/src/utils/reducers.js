import { useReducer } from "react";

import { UPDATE_LIKES, UPDATE_SEARCH_TERM, UPDATE_RECIPES } from "./actions";


export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_LIKES:
      return {
        ...state,
        likes: [...action.likes],
      };

    case UPDATE_RECIPES:
      return {
        ...state,
        recipes: [...action.recipes],
      };

    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };

    default:
      return state;
  }
};

export function useRecipeasyReducer(initialState) {
  return useReducer(reducer, initialState);
}
