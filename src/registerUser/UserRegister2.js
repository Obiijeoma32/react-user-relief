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

export default function UserRegister2() {
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
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter account number"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter BVN"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Select Identification type"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter identification number"} />
        <TextField type="date" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Select D.O.B"} />

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
