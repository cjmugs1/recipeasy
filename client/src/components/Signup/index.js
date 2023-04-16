import { React, useState } from "react";
import "/signup.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleBackButton = () => {
    console.log("this is a placeholder for the back button");
  };



  const handleSignup = () => {
    console.log("you put your email in", email);
    console.log("you confirmed your email", confirmPassword);
    console.log("you signed up", username);
    console.log("you signed up", password);
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
