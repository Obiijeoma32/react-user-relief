/* eslint-disable default-case */
import RightSide from "../RightSide";
import React, { useEffect, useRef } from "react";

export default function Otp() {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  useEffect(() => {
    input1.current.addEventListener("input", moveFocus);
    input2.current.addEventListener("input", moveFocus);
    input3.current.addEventListener("input", moveFocus);
    input4.current.addEventListener("input", moveFocus);
  }, []);

  const moveFocus = (e) => {
    if (e.target.value.length === 1) {
      switch (e.target) {
        case input1.current:
          input2.current.focus();
          break;
        case input2.current:
          input3.current.focus();
          break;
        case input3.current:
          input4.current.focus();
          break;
      }
    }
  };

  return (
    <>
      <RightSide />
      <div className="otp-input" style={{ textAlign: "center" }}>
        <p style={{ paddingTop: "175px" }}>Enter OTP</p>
        <p style={{ fontSize: "15px", color: "rgba(47, 46, 46, 0.7)" }}>Enter 4 digit verification code sent to your number.</p>
        <input
          type="text"
          maxLength="1"
          ref={input1}
          style={{
            width: "90px",
            height: "90px",
            marginLeft: "10px",
            textAlign: "center",
          }}
        />
        <input
          type="text"
          maxLength="1"
          ref={input2}
          style={{
            width: "90px",
            height: "90px",
            marginLeft: "10px",
            textAlign: "center",
          }}
        />
        <input
          type="text"
          maxLength="1"
          ref={input3}
          style={{
            width: "90px",
            height: "90px",
            marginLeft: "10px",
            textAlign: "center",
          }}
        />
        <input
          type="text"
          maxLength="1"
          ref={input4}
          style={{
            width: "90px",
            height: "90px",
            marginLeft: "10px",
            textAlign: "center",
          }}
        />
        <br></br>
        <span style={{ color: "#0097DC" }}>Resend OTP</span>
        <br></br>
        <a href="./success">
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
      </div>
    </>
  );
}
