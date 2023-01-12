import SideBar from "./SideBar";
import Dialog from "@mui/material/Dialog";
import * as React from "react";

import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import TextField from "@mui/material/TextField";
import "../components/App.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Dispute() {
  const [openDisputeOne, setOpenDisputeOne] = React.useState(false);
  const [openDisputeTwo, setOpenDisputeTwo] = React.useState(false);
  const [openDisputeThree, setOpenDisputeThree] = React.useState(false);
  const [openDisputeFour, setOpenDisputeFour] = React.useState(false);
  const [disputeType, setDisputeType] = React.useState("select");

  const handleOpenDispute = () => {
    setOpenDisputeOne(true);
  };
  const nextDispute = () => {
    setOpenDisputeTwo(false);
    setOpenDisputeThree(true);
  };
  const handleContinueFirst = () => {
    setOpenDisputeOne(false);
    setOpenDisputeTwo(true);
  };
  const handleContinueThird = () => {
    setOpenDisputeThree(false);
    setOpenDisputeFour(true);
  };
  const handleContinueThirdClose = () => {
    setOpenDisputeFour(false);
  };
  const handleDisputeType = (event) => {
    setDisputeType(event.target.value);
  };
  const handleCloseDispute = () => {
    setOpenDisputeOne(false);
  };
  const menuStyle = {
    fontSize: 14,
    width: "333px",
    margin: "0 auto",
    paddingTop: "10px",
  };

  return (
    <>
      <SideBar />

      <Container style={{ marginLeft: "300px", marginTop: "50px" }}>
        <Row style={{ width: "900px" }}>
          <Col xs={3}>
            <p>All Disputes</p>
            <p>Debit Disputes</p>
            <p>Credit Disputes</p>
            <button
              onClick={handleOpenDispute}
              style={{
                width: "200px",
                border: "none",
                height: "50px",
                borderRadius: "4px",
                backgroundColor: "#0097DC",
                color: "white",
              }}
            >
              Create New Dispute
            </button>
          </Col>

          <Col>
            <p
              style={{
                color: "#94A2AB",
                textAlign: "left",
              }}
            >
              {" "}
              Today
            </p>

            <Container>
              <Row
                style={{
                  border: "1px solid rgba(31, 36, 49, 0.05)",
                  boxShadow: " 0px 4px 20px rgba(0, 0, 0, 0.05)",
                  borderRadius: " 5px",
                  backgroundColor: "white",
                  width: "607px",
                  height: "75px",
                }}
              >
                <Col xs={1}>
                  {" "}
                  {/* <img
                    src="register/image/receive.png"
                    style={{
                      width: "33px",
                      height: "33px",
                      marginTop: "20px",
                    }}
                    alt=""
                  /> */}
                  <svg style={{ marginTop: "20px" }} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="33" height="33" rx="16.5" fill="#F5FBF8" />
                    <path d="M16.9758 19.2273L13.3999 20.1855L12.4418 16.6096" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.1695 13.7342C21.967 13.0399 20.5379 12.8518 19.1967 13.2112C17.8555 13.5705 16.712 14.448 16.0177 15.6505L13.4 20.1845" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Col>
                <Col xs={6}>
                  {" "}
                  <p style={{ marginleft: "-20px", marginTop: " 10px" }}>Transfer from Emmanuella Etuk </p>
                  <p
                    style={{
                      color: "#3BA871",

                      paddingBottom: "10px",
                    }}
                  >
                    500,000 NGN
                  </p>
                </Col>
                <Col xs={5}>
                  <p style={{ marginTop: "30px" }}>2021-01-21 13:40:49</p>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row
                style={{
                  border: "1px solid rgba(31, 36, 49, 0.05)",
                  boxShadow: " 0px 4px 20px rgba(0, 0, 0, 0.05)",
                  borderRadius: " 5px",
                  backgroundColor: "white",
                  width: "607px",
                  height: "75px",
                  marginTop: "15px",
                }}
              >
                <Col xs={1}>
                  {" "}
                  {/* <img
                    src="register/image/receive.png"
                    style={{
                      width: "33px",
                      height: "33px",
                      marginTop: "20px",
                    }}
                    alt=""
                  /> */}
                  <svg style={{ marginTop: "20px" }} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="33" height="33" rx="16.5" fill="#FFF7F7" />
                    <path d="M15.9181 13.7727L12.3422 12.8145L11.3841 16.3904" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.1118 19.2658C20.9093 19.9601 19.4802 20.1482 18.139 19.7888C16.7978 19.4295 15.6543 18.552 14.96 17.3495L12.3423 12.8155" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Col>
                <Col xs={6}>
                  {" "}
                  <p style={{ marginleft: "-20px", marginTop: " 10px" }}>Transfer to Oluwaseun Orofin </p>
                  <p
                    style={{
                      color: "#ED5B5C",

                      paddingBottom: "10px",
                    }}
                  >
                    500,000 NGN
                  </p>
                </Col>
                <Col xs={5}>
                  <p style={{ marginTop: "30px" }}>2021-01-21 13:40:49</p>
                </Col>
              </Row>
            </Container>

            <p
              style={{
                color: "#94A2AB",
                textAlign: "left",
                marginTop: "20px",
              }}
            >
              {" "}
              Friday
            </p>

            <Container>
              <Row
                style={{
                  border: "1px solid rgba(31, 36, 49, 0.05)",
                  boxShadow: " 0px 4px 20px rgba(0, 0, 0, 0.05)",
                  borderRadius: " 5px",
                  backgroundColor: "white",
                  width: "607px",
                  height: "75px",
                }}
              >
                <Col xs={1}>
                  {" "}
                  {/* <img
                    src="register/image/receive.png"
                    style={{
                      width: "33px",
                      height: "33px",
                      marginTop: "20px",
                    }}
                    alt=""
                  /> */}
                  <svg style={{ marginTop: "20px" }} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="33" height="33" rx="16.5" fill="#F5FBF8" />
                    <path d="M16.9758 19.2273L13.3999 20.1855L12.4418 16.6096" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.1695 13.7342C21.967 13.0399 20.5379 12.8518 19.1967 13.2112C17.8555 13.5705 16.712 14.448 16.0177 15.6505L13.4 20.1845" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Col>
                <Col xs={6}>
                  {" "}
                  <p style={{ marginleft: "-20px", marginTop: " 10px" }}>Transfer from Emmanuella Etuk </p>
                  <p
                    style={{
                      color: "#3BA871",

                      paddingBottom: "10px",
                    }}
                  >
                    500,000 NGN
                  </p>
                </Col>
                <Col xs={5}>
                  <p style={{ marginTop: "30px" }}>2021-01-21 13:40:49</p>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row
                style={{
                  border: "1px solid rgba(31, 36, 49, 0.05)",
                  boxShadow: " 0px 4px 20px rgba(0, 0, 0, 0.05)",
                  borderRadius: " 5px",
                  backgroundColor: "white",
                  width: "607px",
                  height: "75px",
                  marginTop: "15px",
                }}
              >
                <Col xs={1}>
                  {" "}
                  {/* <img
                    src="register/image/receive.png"
                    style={{
                      width: "33px",
                      height: "33px",
                      marginTop: "20px",
                    }}
                    alt=""
                  /> */}
                  <svg style={{ marginTop: "20px" }} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="33" height="33" rx="16.5" fill="#FFF7F7" />
                    <path d="M15.9181 13.7727L12.3422 12.8145L11.3841 16.3904" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.1118 19.2658C20.9093 19.9601 19.4802 20.1482 18.139 19.7888C16.7978 19.4295 15.6543 18.552 14.96 17.3495L12.3423 12.8155" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Col>
                <Col xs={6}>
                  {" "}
                  <p style={{ marginleft: "-20px", marginTop: " 10px" }}>Transfer to Oluwaseun Orofin </p>
                  <p
                    style={{
                      color: "#ED5B5C",

                      paddingBottom: "10px",
                    }}
                  >
                    500,000 NGN
                  </p>
                </Col>
                <Col xs={5}>
                  <p style={{ marginTop: "30px" }}>2021-01-21 13:40:49</p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        <Dialog open={openDisputeOne} close={handleCloseDispute} fullWidth maxWidth="sm">
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
              <Select id="disputeType" size="small" value={disputeType} onChange={handleDisputeType} fullWidth className="mt-2" style={menuStyle}>
                <MenuItem disabled value={"select"} style={menuStyle}>
                  {"Select Dispute Type"}
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
                placeholder={"Enter Terminal ID"}
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
                placeholder={"Enter Reference Number"}
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
                placeholder={"Enter Amount"}
              />
              <TextField
                // onChange={handleAllCoverageArea}
                type="date"
                id="allCoverageArea"
                size="small"
                variant="outlined"
                fullWidth
                className="mt-1"
                // value={allCoverageArea}
                style={menuStyle}
                placeholder={"Select Date"}
              />

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

        {/* second dispute */}

        <Dialog open={openDisputeTwo} close={handleCloseDispute} fullWidth maxWidth="sm">
          <DialogContent>
            <div style={{ textAlign: "center" }}>
              <Row>
                <Col>Dispute Details</Col>
                <Col>22-08-2020</Col>
              </Row>
              <hr></hr>
              <Row style={{ marginTop: "10px" }}>
                <Col style={{ textAlign: "left" }}>Segun Oriyomi</Col>
                <Col style={{ textAlign: "right" }}>
                  ₦50,000.00<br></br>Transfer
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col style={{ textAlign: "left" }}>
                  Merchant Name Location:<br></br>2HIGSS01 SAFE PAY LANG
                </Col>
                <Col style={{ textAlign: "right" }}>
                  Credit Account:<br></br>8056560425
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col style={{ textAlign: "left" }}>
                  Terminal ID :<br></br>2HIGSS01
                </Col>
                <Col style={{ textAlign: "right" }}>
                  Account Number:<br></br>N/A
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col style={{ textAlign: "left" }}>
                  ID:<br></br>3333333
                </Col>
                <Col style={{ textAlign: "right" }}>
                  Transaction Status:<br></br>Transaction Approved
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col style={{ textAlign: "left" }}>
                  Masked Pan:<br></br>134655592****111989
                </Col>
                <Col style={{ textAlign: "right" }}>
                  Posting Status:<br></br>Processed
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col style={{ textAlign: "left" }}>
                  Request Time:<br></br>12-01-2020T13:25:24
                </Col>
                <Col style={{ textAlign: "right" }}>
                  Request Time:<br></br>12-01-2020T13:25:24
                </Col>
              </Row>
              <br></br>
              <p onClick={nextDispute}>reopen Dispute</p>
            </div>
          </DialogContent>
        </Dialog>

        {/* third dispute */}

        <Dialog open={openDisputeThree} fullWidth maxWidth="sm">
          <DialogContent style={{ paddingTop: "20px" }}>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <p>Transaction Dispute</p>
              <p>Are you sure you want to dispute this transaction</p>

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

        {/* i'm sure the last dispute */}
        <Dialog open={openDisputeFour} fullWidth maxWidth="sm">
          <DialogContent style={{ paddingTop: "20px" }}>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <p>Transaction Dispute</p>
              <p>You’d be notified on the progress of your dispute</p>

              <br></br>
              <button
                onClick={handleContinueThirdClose}
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

export default Dispute;
