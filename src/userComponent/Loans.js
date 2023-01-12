import SideBar from "./SideBar";
import Dialog from "@mui/material/Dialog";
import * as React from "react";

import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import "../components/App.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Loans() {
  const [open, setOpen] = React.useState(true);
  const [firstText, setFirstText] = useState("Send money");
  const [openSecond, setOpenSecond] = React.useState(false);
  const [openThird, setOpenThird] = React.useState(false);
  const [openForth, setOpenForth] = React.useState(false);

  const menuStyle = {
    fontSize: 14,
    width: "333px",
    margin: "0 auto",
    paddingTop: "10px",
    background: "#F6FBFE",
  };

  const handleContinueFirst = () => {
    setOpen(false);
    setOpenSecond(true);
    setFirstText("Confirm Transaction");
  };
  const handleContinueSecond = () => {
    setOpenSecond(false);
    setOpenForth(true);
  };

  const [loanTenure, setLoanTenure] = React.useState("select");
  const handleLoanTenure = (event) => {
    setLoanTenure(event.target.value);
  };
  const [beneficiary, setBeneficiary] = React.useState("select");
  const handleBeneficiary = (event) => {
    setBeneficiary(event.target.value);
  };
  return (
    <>
      <SideBar></SideBar>
      <Container style={{ marginLeft: "300px" }}>
        <p style={{ marginTop: "50px", color: " #68717F" }}>
          <span style={{ fontSize: "20px", fontWeight: "600", color: "#162930" }}>{"Loan"}</span> <br></br>Let’s get you started with Relief
        </p>

        <Dialog open={open} fullWidth maxWidth="md">
          <DialogContent>
            <h1
              style={{
                textAlign: "center",
                paddingTop: "30px",
                fontWeight: "400",
              }}
            >
              ₦0.00
            </h1>
            <p style={{ textAlign: "center", color: "rgba(47, 46, 46, 0.3)" }}>Enter Amount</p>

            <div style={{ textAlign: "center" }}>
              <Select id="loanTenure" size="small" value={loanTenure} onChange={handleLoanTenure} fullWidth className="mt-2" style={menuStyle}>
                <MenuItem disabled value={"select"} style={menuStyle}>
                  {"Select Loan Tenure "}
                </MenuItem>
                <MenuItem value={"1"} style={menuStyle}>
                  {"1"}
                </MenuItem>
              </Select>
              <br></br>
              <lable style={{ marginLeft: "-170px", textAlign: "left" }}>Monthly Repayment</lable>
              <br></br>
              <TextField
                // onChange={handleAllCoverageArea}
                type="text"
                id="allCoverageArea"
                size="small"
                variant="outlined"
                fullWidth
                className="mt-1"
                // value={allCoverageArea}
                style={menuStyle}
                placeholder={"₦50,000.00"}
              />
              <br></br>
              <label style={{ marginLeft: "-190px", textAlign: "left" }}>Total Repayment</label>
              <br></br>
              <TextField
                // onChange={handleAllCoverageArea}
                type="text"
                id="allCoverageArea"
                size="small"
                variant="outlined"
                fullWidth
                className="mt-1"
                // value={allCoverageArea}
                style={menuStyle}
                placeholder={"₦50,000.00"}
              />
              <br></br>
              <label style={{ marginLeft: "-220px", textAlign: "left" }}>Interest Rate</label>
              <br></br>
              <TextField
                // onChange={handleAllCoverageArea}
                type="text"
                id="allCoverageArea"
                size="small"
                variant="outlined"
                fullWidth
                className="mt-1"
                // value={allCoverageArea}
                style={menuStyle}
                placeholder={"1.33% per month"}
              />
              <br></br>
              <div style={{ textAlign: "center" }}>
                <Row
                  style={{
                    width: "333px",
                    marginLeft: "250px",
                    marginTop: "20px",
                  }}
                >
                  <Col xs={1}>
                    <input type="checkbox" />
                  </Col>
                  <Col>
                    <p>I have read, understood and I agree to the Privacy Policy and Terms and conditions</p>
                  </Col>
                </Row>
              </div>
              <button
                onClick={handleContinueFirst}
                style={{
                  textAlign: "center",
                  width: "333px",
                  height: "50px",
                  color: "white",
                  backgroundColor: "#0097DC",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "50px",
                }}
              >
                Continue
              </button>
            </div>
          </DialogContent>
        </Dialog>
        {/* second dialog */}
        <Dialog open={openSecond} fullWidth maxWidth="sm">
          <DialogContent style={{ paddingTop: "20px" }}>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <p>Successful</p>
              <p>Your loan request has successfully been processed</p>

              <br></br>
              <button
                //   onClick={handleContinueFirst}
                style={{
                  textAlign: "center",
                  width: "333px",
                  height: "50px",
                  color: "white",
                  backgroundColor: "#0097DC",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "50px",
                }}
              >
                Continue
              </button>
            </div>
          </DialogContent>
          <DialogActions style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center" }}></div>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}
export default Loans;
