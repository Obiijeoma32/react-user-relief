import RightSide from "../RightSide"


export default function Success() {
    return (
      <>
        <RightSide />
        <div style={{ textAlign: "center" }}>
          
          <p style={{paddingTop:"250px"}}>Successful</p>
          <p>You have successfully created your account</p>
          <a href="./Home">
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