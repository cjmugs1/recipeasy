import { useReducer } from 'react';
import {
  UPDATE_LIKES,
  UPDATE_SEARCH_TERM,
  UPDATE_RECIPES
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
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
    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useRecipeasyReducer(initialState) {
  return useReducer(reducer, initialState);
}
