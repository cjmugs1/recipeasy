import React,  { useState } from "react";
import Auth from "../../utils/auth";
import "./login.css";

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { error: loginError }] = useMutation(LOGIN_USER);
  const [signupUser, { error: signupError }] = useMutation(SIGNUP_USER);

  const handleLogin = () => {
try {
  const { data } = await loginUser({ variables: { email, password } });

  if (data.login.token) {
    Auth.login(data.login.token);
  } else {
    console.log("Invalid credentials");
  }
} catch (error) {
  console.error("Error occurred while logging in: ", error);
  };
  };

  const handleSignup = () => {
    try {
      const { data } = await signupUser({ variables: { email, password } });
    }

    if (data.signup.token) {
      Auth.login(data.signup.token);
    } else {
      console.log("Invalid credentials");
    }
  } catch (error) {
    console.error("Error occurred while signing up: ", error);
    
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
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

