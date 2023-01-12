import RightSide from "../RightSide";
import React from "react";
import "../components/App.css";

import TextField from "@mui/material/TextField";
const menuStyle = {
  fontSize: 14,
  width: "465px",
  height: "50px",
  margin: "0 auto",
  paddingTop: "10px",
};

export default function businessRegister2() {
  return (
    <>
      <RightSide />

      <div style={{ textAlign: "center" }}>
        <p
          style={{
            textAlign: "left",
            marginLeft: "140px",
            paddingTop: "100px",
          }}
        >
          KYC Information
        </p>
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Select Bank Name"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter RC Number"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter Tax Identification Number"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter Form CAC 1.1"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter Certificate of Incorporation"} />
        <TextField type="number" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter Director’s Details"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter Beneficial Owner"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter Memo&Articles of Association "} />

        <a href="./otp">
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
          >
            {" "}
            Continue
          </button>
        </a>

        <p>
          Already have an account?
          <span>
            <a href="./"> Login</a>
          </span>
        </p>
      </div>
    </>
  );
}
