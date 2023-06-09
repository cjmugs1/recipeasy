import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

export default function Signup() {
  localStorage.removeItem("id_token");
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    username: "",
    name: "",
  });
  const [addUser] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const errorMsg = document.getElementById("error");

  const handleBackButton = () => {
    return navigate("/");
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
          name: formState.name,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (error) {
      if (error.graphQLErrors) {
        const duplicateKeyError = error.graphQLErrors.find(
          (e) =>
            e.extensions.code === "INTERNAL_SERVER_ERROR" &&
            e.message.includes("duplicate key error")
        );
        console.log(duplicateKeyError);
        if (duplicateKeyError) {
          // Handle duplicate key error here
          const fieldName = duplicateKeyError.extensions.exception.keyValue;
          console.log(Object.keys(fieldName));

          const errorMessage = `This ${Object.keys(
            fieldName
          )} is already taken. Please choose a different one.`;

          console.log(errorMessage);
          errorMsg.textContent = errorMessage;
          errorMsg.setAttribute("class", "alert alert-danger");
        } else {
          // Handle other errors
          console.log(error.message);
          errorMsg.textContent = error;
          errorMsg.setAttribute("class", "alert alert-danger");
        }
      } else {
        // Handle other errors
        console.log(error);
        errorMsg.textContent = error;
        errorMsg.setAttribute("class", "alert alert-danger");
      }
    }
  };

  const handleChange = (event) => {
    console.log(errorMsg);
    if (errorMsg) {
      errorMsg.textContent = "";
      errorMsg.removeAttribute("class");
    }

    const { name, value } = event.target;
    console.log(name);
    console.log(event.target);
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
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
        borderRadius: "34px",
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
          color: "white",
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
          onChange={handleChange}
          style={{
            padding: "16px",
            width: "362px",
            marginBottom: "16px",
            borderRadius: "5px",
            border: "1px solid #f2f2f2",
            outline: "none",
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
            border: "1px solid #f2f2f2",
            outline: "none",
          }}
          onChange={handleChange}
          type="username"
          placeholder="Username"
          name="username"
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
            outline: "none",
          }}
          type="name"
          placeholder="Name"
          name="name"
          onChange={handleChange}
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
            outline: "none",
          }}
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        ></input>
      </div>
      <div width="100%" justifyContent="center" alignItems="center">
        <div role="alert" id="error"></div>
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
            border: "none",
          }}
          onClick={handleSignup}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}
