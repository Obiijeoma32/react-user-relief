import Dialog from "@mui/material/Dialog";
import * as React from "react";

import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import SideBar from "./SideBar";
import TextField from "@mui/material/TextField";
import "../components/App.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Bills() {
  const menuStyle = {
    fontSize: 14,
    width: "333px",
    margin: "0 auto",
    paddingTop: "10px",
  };
  const [open, setOpen] = React.useState(true);
  const [firstText, setFirstText] = React.useState("Bill Payment");
  const [openSecond, setOpenSecond] = React.useState(false);
  const [openThird, setOpenThird] = React.useState(false);
  const [openForth, setOpenForth] = React.useState(false);

  const handleContinueFirst = () => {
    setOpen(false);
    setOpenSecond(true);
  };
  const handleContinueSecond = () => {
    setOpenSecond(false);
    setOpenThird(true);
    setFirstText("Confirm Transaction");
  };
  const handleContinueThird = () => {
    setOpenThird(false);
    setOpenForth(true);
  };

  
  const [debitAccount, setDebitAccount] = React.useState("select");
  const handleDebitAccount = (event) => {
    setDebitAccount(event.target.value);
  };
  const [category, setCategory] = React.useState("select");
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const [customerId, setCustomerId] = React.useState("");
  const handleCustomerIdChange = (event) => {
    setCustomerId(event.target.value);
  };
  return (
    <>
      <SideBar />
      <p style={{ marginTop: "50px", color: " #68717F", marginLeft: "300px" }}>
        <span style={{ fontSize: "20px", fontWeight: "600", color: "#162930" }}>{firstText}</span> <br></br>Let’s get you started with Relief
      </p>
      <Dialog open={open} fullWidth maxWidth="sm">
        <DialogContent style={{ paddingTop: "20px" }}>
          <div style={{ textAlign: "center", paddingTop: "20px" }}>
            <Container>
              <Row>
                <Col>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50px",
                      backgroundColor: "#E6F7FF",
                      marginLeft: "50px",
                    }}
                  >
                    <img src="bns/" alt="" />
                  </div>
                  <p>Electricity</p>
                </Col>
                <Col>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50px",
                      backgroundColor: "#E6F7FF",
                      marginLeft: "50px",
                    }}
                  >
                    <img src="bns/" alt="" />
                  </div>
                  <p>Internet</p>
                </Col>
                <Col>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50px",
                      backgroundColor: "#E6F7FF",
                      marginLeft: "50px",
                    }}
                  >
                    <img src="bns/" alt="" />
                  </div>
                  <p>Education</p>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50px",
                      backgroundColor: "#E6F7FF",
                      marginLeft: "100px",
                    }}
                  >
                    <img src="bns/" alt="" />
                  </div>
                  <p>Transport</p>
                </Col>
                <Col>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50px",
                      backgroundColor: "#E6F7FF",
                      marginLeft: "100px",
                    }}
                  >
                    <img src="bns/" alt="" />
                  </div>
                  <p>Lotto</p>
                </Col>
              </Row>
            </Container>

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

      {/* second Dialog */}

      <Dialog open={openSecond} fullWidth maxWidth="md">
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
            <Select id="debitAccount" size="small" value={category} onChange={handleCategory} fullWidth className="mt-2" style={menuStyle}>
              <MenuItem disabled value={"select"} style={menuStyle}>
                {"Select Category Account"}
              </MenuItem>
              <MenuItem value={"1"} style={menuStyle}>
                {"1"}
              </MenuItem>
            </Select>
            <br></br>

            <Select id="debitAccount" size="small" value={debitAccount} onChange={handleDebitAccount} fullWidth className="mt-2" style={menuStyle}>
              <MenuItem disabled value={"select"} style={menuStyle}>
                {"Select Beneficiary"}
              </MenuItem>
              <MenuItem value={"1"} style={menuStyle}>
                {"1"}
              </MenuItem>
            </Select>
            <br></br>
            <TextField onChange={handleCustomerIdChange} type="text" id="allCoverageArea" size="small" variant="outlined" fullWidth className="mt-1" value={customerId} style={menuStyle} placeholder={"Customer ID  "} />
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
      </Dialog>

      {/* open third */}

      <Dialog open={openThird} fullWidth maxWidth="md">
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
              onClick={handleContinueThird}
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

      {/* open last dialog box */}

      <Dialog open={openForth} fullWidth maxWidth="sm">
        <DialogContent style={{ paddingTop: "20px" }}>
          <div style={{ textAlign: "center", paddingTop: "20px" }}>
            <p>Successful</p>
            <p>
              You have successfully sent <b>₦5,000.00</b> <br></br>to <b>Segun Oriyomi</b>{" "}
            </p>

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
    </>
  );
}
export default Bills;
