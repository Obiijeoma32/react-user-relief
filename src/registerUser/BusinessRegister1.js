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

export default function BusinessRegister1() {
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
          Business Information
        </p>
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter Company Name"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter Company Registration Number"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter Email Address"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter Office Address"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Select Bank"} />
        <TextField type="number" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter bank account number"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Select Business sector"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter Contact Email Address "} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Enter Contact Phone Number"} />
        <a href="/registerBusiness2">
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
