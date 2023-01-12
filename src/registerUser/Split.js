import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function Split() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const handleCheckbox1Change = () => {
    setCheckbox2(false);
    setCheckbox1((prevState) => !prevState);
  };

  const handleCheckbox2Change = () => {
    setCheckbox1(false);
    setCheckbox2((prevState) => !prevState);
  };

  function handleContinue(event) {
    event.preventDefault();
    if (checkbox1 === true) {
      window.location.href = "/registerBusiness";
    } else if (checkbox2 === true) {
      window.location.href = "/userRegister1";
    }
  }
  return (
    <>
      <div
        style={{
          width: "600px",
          height: "550px",
          boxShadow: "0px 5px 200px 3px rgba(64, 68, 82, 0.1)",
          marginLeft: "45%",
          marginTop: "10%",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <p style={{ color: "#1E354F", fontSize: "20px", paddingTop: "20px", fontWeight: "600" }}>Select account type</p>
        <p style={{ color: "#707885", fontSize: "14px", fontWeight: "400", marginBottom: "40px" }}>Select the type of account you are trying to create</p>
        <div>
          <div
            style={{
              width: "470px",
              border: "1px solid #CCD2D5",
              textAlign: "left",
              height: "100px",
              borderRadius: "10px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Row style={{ marginTop: "15px" }}>
              <Col xs={2} style={{ marginLeft: "30px" }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M33.7512 11.25H6.25122C5.56086 11.25 5.00122 11.8096 5.00122 12.5V32.5C5.00122 33.1904 5.56086 33.75 6.25122 33.75H33.7512C34.4416 33.75 35.0012 33.1904 35.0012 32.5V12.5C35.0012 11.8096 34.4416 11.25 33.7512 11.25Z"
                    stroke="#192850"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.25 11.25V8.75C26.25 8.08696 25.9866 7.45107 25.5178 6.98223C25.0489 6.51339 24.413 6.25 23.75 6.25H16.25C15.587 6.25 14.9511 6.51339 14.4822 6.98223C14.0134 7.45107 13.75 8.08696 13.75 8.75V11.25"
                    stroke="#192850"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M35.0013 19.7354C30.4424 22.3729 25.2669 23.7578 20 23.7495C14.734 23.7578 9.55941 22.3734 5.00104 19.7367" stroke="#192850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.125 18.75H21.875" stroke="#192850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Col>
              <Col>
                <p>Business</p>
                <p style={{ fontSize: "14px" }}>Choose the type of account you would like to get started with.</p>
              </Col>
              <Col xs={1} style={{ marginRight: "20px" }}>
                <input type="checkbox" checked={checkbox1} onChange={handleCheckbox1Change} style={{ borderRadius: "50%" }} />
              </Col>
            </Row>
          </div>
          <div
            style={{
              width: "470px",
              border: "1px solid #CCD2D5",
              textAlign: "left",
              height: "100px",
              borderRadius: "10px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
            }}
          >
            <Row style={{ marginTop: "15px" }}>
              <Col xs={2} style={{ marginLeft: "30px" }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#192850" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M20 25C23.4518 25 26.25 22.2018 26.25 18.75C26.25 15.2982 23.4518 12.5 20 12.5C16.5482 12.5 13.75 15.2982 13.75 18.75C13.75 22.2018 16.5482 25 20 25Z"
                    stroke="#192850"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.9686 31.1522C10.9102 29.301 12.3457 27.7464 14.1161 26.6606C15.8866 25.5747 17.923 25 20 25C22.0769 25 24.1133 25.5747 25.8838 26.6605C27.6543 27.7464 29.0898 29.3009 30.0314 31.1522"
                    stroke="#192850"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Col>
              <Col>
                <p>Personal</p>
                <p style={{ fontSize: "14px" }}>Choose the type of account you would like to get started with.</p>
              </Col>
              <Col xs={1} style={{ marginRight: "20px" }}>
                <input type="checkbox" checked={checkbox2} onChange={handleCheckbox2Change} />
              </Col>
            </Row>
          </div>
          <button
            onClick={handleContinue}
            style={{
              width: "426px",
              height: "64px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "60px",
              border: "none",
              backgroundColor: "#0097DC",
              borderRadius: "5px",
              color: "white",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
