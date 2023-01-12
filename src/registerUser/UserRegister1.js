import RightSide from "../RightSide";
import React from "react";
import "../components/App.css";
import TextField from "@mui/material/TextField";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const menuStyle = {
  fontSize: 14,
  width: "465px",
  height: "50px",
  margin: "0 auto",
  paddingTop: "10px",
};

export default function UserRegister1() {
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
          Let’s get started 👋
        </p>
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"First Name"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Last Name"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Email address"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Phone number"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"Address"} />
        <TextField type="number" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"State"} />
        <TextField type="text" size="small" variant="outlined" fullWidth className="mt-1" style={menuStyle} placeholder={"D.O.B"} />
        <Row style={{ width: "465px", marginRight: "auto", marginLeft: "auto", textAlign: "left" }}>
          <Col xs={1}>
            <input type="checkbox" />
          </Col>
          <Col style={{ color: "#16243A" }}>I have read, understood and I agree to Relief’s Privacy Policy and Terms and conditions</Col>
        </Row>

        <a href="./userRegister2">
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
