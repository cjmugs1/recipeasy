// These are the actions that will be used throughout the application to update the global state. The reducer will use these actions to update the global state. Think about what actions need
// an update to the global state associated with them.
// There are very few variables that we need to update global state for at this point in our app concept. Global state is used to store and keep track of information that is not going to be stored in the database.

// not sure if this is needed just yet. Its possible that the recipes on the browser page will just be rendered from the database anyways, so we do not care about keeping them in the global state.
// export const UPDATE_RECIPES = "UPDATE_RECIPES";

// This will be used to update the users information in global state. Is this even needed?
// export const UPDATE_USER = "UPDATE_USER";

// This will be used to update the number of likes a recipe has gotten.
export const UPDATE_RECIPES = "UPDATE_RECIPES";

export const UPDATE_LIKES = "UPDATE_LIKES";

export const TOGGLE_LOGIN = "TOGGLE_LOGIN";

export const UPDATE_ACCOUNT_NAME = "UPDATE_ACCOUNT_NAME";

export const UPDATE_LANGUAGE = "UPDATE_LANGUAGE";

export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";