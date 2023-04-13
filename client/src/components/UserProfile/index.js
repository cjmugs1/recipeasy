// component for creating, displaying, and editing user profile
// name, email, language, saved recipes

import React, { useState } from 'react';
import { UPDATE_ACCOUNT_NAME, UPDATE_LANGUAGE } from '../utils/actions';
import { useAccountContext } from '../utils/GlobalState';

export default function AccountDisplay() {
  const [state, dispatch] = useAccountContext();
  const [newName, setNewName] = useState(state.userName);
  const [updatingName, setUpdatingName] = useState(false);

  const toggleUpdateName = () => {
    setUpdatingName(!updatingName);
  };

  const handleInputSubmit = () => {
    dispatch({
      type: UPDATE_ACCOUNT_NAME,
      userName: newName,
    });
    setUpdatingName(!updatingName);
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <>
      {state.isLoggedIn ? (
        <>
          <h1>Hello {state.userName}!</h1>
          {updatingName ? (
            <div>
              <input
                placeholder="New userName"
                onChange={handleInputChange}
                onSubmit={handleInputSubmit}
              ></input>
              <button onClick={handleInputSubmit}>Submit</button>
            </div>
          ) : (
            <button onClick={toggleUpdateName}>Update userName</button>
          )}
          <span>You are signed in to Recipeasy</span>
        </>
      ) : (
        <h1>Please log in</h1>
      )}
      <button
        onClick={() =>
          dispatch({
            type: UPDATE_ACCOUNT_STATUS,
            isLoggedIn: state.isLoggedIn,
          })
        }
      >
        {state.isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </>
  );
}