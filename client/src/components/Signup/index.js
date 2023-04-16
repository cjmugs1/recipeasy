import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        name: formState.name,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const back = "<"; //this is a placeholder for the "back" icon

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        borderRadius: "34px"
      }}
    >
      <div
        onClick={handleBackButton}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E7693E",
          borderRadius: "50%",
          height: "40px",
          width: "40px",
          position: "absolute",
          top: "40px",
          left: "36px",
          color: "white"
        }}
      >
        {back}
      </div>
      <div width="100%" justifyContent="center" alignItems="center">
        <p
          className="recipeasy-text"
          style={{ color: "#E7693E", fontSize: "50px" }}
        >
          Recipeasy.
        </p>
      </div>
      <div width="100%" justifyContent="center" alignItems="center">
        <input
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "16px",
            width: "362px",
            marginBottom: "16px",
            borderRadius: "5px",
            border: "1px solid #f2f2f2",
            outline: "none"
          }}
          type="email"
          placeholder="Email"
        ></input>
      </div>
      <div width="100%" justifyContent="center" alignItems="center">
        <input
          style={{
            padding: "16px",
            width: "362px",
            margin: "16px",
            borderRadius: "5px",
            border: "1px solid #f2f2f2",
            outline: "none"
          }}
          onChange={(e) => setPassword(e.target.value)}
          type="username"
          placeholder="Username"
        ></input>
      </div>
      <div width="100%" justifyContent="center" alignItems="center">
        <input
          style={{
            padding: "16px",
            width: "362px",
            margin: "16px",
            borderRadius: "5px",

            border: "1px solid #f2f2f2",
            outline: "none"
          }}
          type="password"
          placeholder="Password"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div width="100%" justifyContent="center" alignItems="center">
        <input
          style={{
            padding: "16px",
            width: "362px",
            margin: "16px",
            borderRadius: "5px",
            border: "1px solid #f2f2f2",
            outline: "none"
          }}
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
      </div>
      <div position="absolute" top="4px" left="4px">
        <button
          style={{
            fontFamily: "FontName, sans-serif",
            fontSize: "16px",
            color: "white",
            marginTop: "24px",
            padding: "14px",
            background: "#E7693E",
            borderRadius: "32px",
            width: "300px",
            border: "none"
          }}
          onClick={handleSignup}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};
