import RightSide from "./RightSide";
import React from "react";
import "../src/components/App.css";
import TextField from "@mui/material/TextField";

import { border } from "@mui/system";

const menuStyle = {
  fontSize: 14,
  width: "465px",
  height: "50px",
  margin: "0 auto",
  paddingTop: "10px",
};

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleContinue(event) {
    event.preventDefault();
    if (email === "user@gmail.com" && password === "user") {
      window.location.href = "/Home";
    } else if (email === "admin@gmail.com" && password === "admin") {
      window.location.href = "/dashboard";
    }
  }
  return (
    <>
      <RightSide />
      <div style={{ textAlign: "center", color: "#162930" }}>
        <p
          style={{
            textAlign: "left",
            paddingTop: "275px",
            marginLeft: "140px",
          }}
        >
          Login to your account 👋
        </p>
        <TextField onChange={(e) => setEmail(e.target.value)} value={email} type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Email address"} />
        <br></br>
        <TextField onChange={(e) => setPassword(e.target.value)} value={password} type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Password (min. of 6 characters)"} />
        <button
          style={{
            width: "465px",
            height: "55px",
            backgroundColor: "#0097DC",
            borderRadius: "4px",
            border: "none",
            color: "white",
            marginTop: "35px",
          }}
          onClick={handleContinue}
        >
          {" "}
          Login
        </button>
        <br></br>
        <br></br>

        <p
          style={{
            fontSize: "14px",
            textDecoration: "none",
            color: "black",
          }}
        >
          Don’t have an account?{" "}
          <a href="./split">
            <span style={{ color: "#0097DC", textDecoration: "none" }}>Sign up</span>{" "}
          </a>
        </p>
      </div>
    </>
  );
}
