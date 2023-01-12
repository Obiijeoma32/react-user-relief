import Dialog from "@mui/material/Dialog";
import * as React from "react";

import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";
import SideBar from "./SideBar";
import TextField from "@mui/material/TextField";
import "../components/App.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Transaction() {
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

  const [debitAccount, setDebitAccount] = React.useState("select");
  const handleDebitAccount = (event) => {
    setDebitAccount(event.target.value);
  };
  const [beneficiary, setBeneficiary] = React.useState("select");
  const handleBeneficiary = (event) => {
    setBeneficiary(event.target.value);
  };
  return (
    <>
      <SideBar />
      <Container style={{ marginLeft: "300px" }}>
        <p style={{ marginTop: "50px", color: " #68717F" }}>
          <span style={{ fontSize: "20px", fontWeight: "600", color: "#162930" }}>{firstText}</span> <br></br>Let’s get you started with Relief
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
              <Select id="debitAccount" size="small" value={debitAccount} onChange={handleDebitAccount} fullWidth className="mt-2" style={menuStyle}>
                <MenuItem disabled value={"select"} style={menuStyle}>
                  {"Select Debit Account"}
                </MenuItem>
                <MenuItem value={"1"} style={menuStyle}>
                  {"1"}
                </MenuItem>
              </Select>
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
                placeholder={"Enter recipent’s account number"}
              />
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
                placeholder={"Enter description (optional)"}
              />
              <br></br>
              <Select id="debitAccount" size="small" value={beneficiary} onChange={handleBeneficiary} fullWidth className="mt-2" style={menuStyle}>
                <MenuItem disabled value={"select"} style={menuStyle}>
                  {"Select Beneficiary"}
                </MenuItem>
                <MenuItem value={"1"} style={menuStyle}>
                  {"1"}
                </MenuItem>
              </Select>
              <br></br>
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

        <Dialog open={openSecond} fullWidth maxWidth="md">
          <DialogContent style={{ paddingTop: "20px" }}>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <p>
                Segun Oriyomi<br></br>12345678890 - Gtbank
              </p>
              <p>Amount</p>
              <p>₦5,000.00</p>

              <Container
                style={{
                  width: "333px",
                  border: "0.5px dashed #0097DC",
                  backgroundColor: "#F5FCFF",
                  borderRadius: "4px",
                }}
              >
                <Row>
                  <Col>
                    {" "}
                    <p>From:</p>
                    <p>0123456789</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>Transaction fee:</p>
                    <p>₦0.00</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    <p>ID:</p>
                    <p>01234567890</p>
                  </Col>
                  <Col>
                    <p>Description:</p>
                    <p>Bills Payment</p>
                  </Col>
                </Row>
              </Container>
              <br></br>
              <button
                onClick={handleContinueSecond}
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

        {/* third dialod */}

        {/* forth dialog */}

        <Dialog open={openForth} fullWidth maxWidth="sm">
          <DialogContent style={{ paddingTop: "20px" }}>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <p>Successful</p>
              <p>
                You have successfully sent <b>₦5,000.00</b> <br></br>to <b>Segun Oriyomi</b>{" "}
              </p>

              <br></br>
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
          <DialogActions style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center" }}></div>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}
export default Transaction;
