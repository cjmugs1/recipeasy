import React,  { useState } from "react";
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import "./login.css";

export default function Login(){
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState)
  };


  const handleSignup = () => {
    console.log("you logged in with email", email);
    console.log("you logged in with password", password);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        borderRadius: "34px",
        background:
          "linear-gradient(180deg, #000000 -3.42%, rgba(196, 196, 196, 0) 69.17%)"
      }}
    >
      <div width="100%" justifyContent="center" alignItems="center">
        <p
          className="recipeasy-text"
          style={{ color: "#E7693E", fontSize: "72px" }}
        >
          Recipeasy.
        </p>
      </div>
      <div width="100%" justifyContent="center" alignItems="center">
        <input
          onChange={handleChange}
          style={{
            padding: "16px",
            width: "362px",
            marginBottom: "16px",
            borderRadius: "5px",
            outline: "none",
            background: "rgba(74, 74, 74, 0.78)"
          }}
          type="email"
          placeholder="Email"
          name="email"
        ></input>
      </div>

      <div width="100%" justifyContent="center" alignItems="center">
        <input
          style={{
            padding: "16px",
            width: "362px",
            margin: "16px",
            borderRadius: "5px",
            background: "rgba(74, 74, 74, 0.78)",
            color: "white",
            outline: "none"
          }}
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
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
            background: "#E7BD3E",
            borderRadius: "32px",
            width: "300px",
            border: "none"
          }}
          onClick={handleLogin}
        >
          LOG IN
        </button>
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

