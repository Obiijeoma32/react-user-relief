import SideBar from "./SideBar";
import "../components/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  function change_text() {
    var x = document.getElementById("balance");
    if (x.innerHTML === "₦0.00") {
      x.innerHTML = "₦*";
    } else {
      x.innerHTML = "₦0.00";
    }
  }
  return (
    <>
      <SideBar></SideBar>

      <Container style={{ marginLeft: "300px", width: "100%" }}>
        <div style={{ marginTop: "20px" }}>
          <p style={{ marginTop: "50px", color: "#68717F", fontSize: "16px" }}>
            <span style={{ fontSize: "20px", fontWeight: "600", color: "#162930" }}>Welcome Yemi 👋</span> <br></br>Let’s get you started with Relief
          </p>
        </div>
        <Row
          style={{
            width: "900px",
            backgroundColor: "#46AFE0",
            color: "white",
            height: "250px ",
            borderRadius: "15px",
          }}
        >
          <Col xs={9}>
            <p style={{ paddingTop: "20px", fontSize: "14px", marginLeft: "15px" }}>
              <span style={{ fontSize: "38px", fontWeight: "600" }} id="balance">
                ₦0.<span style={{ fontSize: "25px" }}>00</span>
              </span>
              <br></br>
              Total Balance in NGN
            </p>
            <div className="button-clicks" style={{ marginTop: "4rem" }}>
              <button
                style={{
                  backgroundColor: "#ffffff",
                  color: " #0098DB",
                  border: "none",
                  width: "110px",
                  height: " 50px",
                  borderRadius: "5px",
                  textalign: "left",
                  fontSize: "14px",
                  marginLeft: "20px",
                  // marginTop: "30px",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0312 9.85181L14.2188 12.0393L12.0312 14.2268" stroke="#0098DB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.28125 12.0393H14.2188" stroke="#0098DB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.46875 7.66431L3.28125 5.47681L5.46875 3.28931" stroke="#0098DB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.2188 5.47681H3.28125" stroke="#0098DB" strokeWidth="1.09375" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ marginLeft: "10px" }}>Transfer</span>
              </button>

              <button
                style={{
                  backgroundColor: "#ffffff",
                  color: " #0098DB",
                  border: "none",
                  width: "15rem",
                  height: " 50px",
                  borderRadius: "5px",
                  textalign: "left",
                  fontSize: "14px",
                  marginLeft: "2rem",
                }}
              >
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.3821 5.87426L11.5586 2.05078C11.5532 2.0453 11.5472 2.04049 11.5416 2.03529C11.5342 2.02851 11.527 2.0215 11.5193 2.01513C11.5141 2.01092 11.5086 2.00725 11.5033 2.00321C11.4944 1.99637 11.4855 1.98943 11.4762 1.98312C11.472 1.98028 11.4675 1.97791 11.4632 1.97521C11.4523 1.96836 11.4415 1.96155 11.4301 1.95545C11.4271 1.95381 11.4239 1.95254 11.4208 1.95097C11.408 1.94436 11.395 1.93802 11.3816 1.93245C11.3796 1.93158 11.3774 1.93094 11.3753 1.93011C11.3609 1.92434 11.3463 1.91893 11.3313 1.91439C11.3292 1.91372 11.3269 1.91332 11.3248 1.91269C11.3099 1.90838 11.295 1.90441 11.2796 1.90134C11.2747 1.90037 11.2697 1.89994 11.2648 1.8991C11.2521 1.8969 11.2395 1.89466 11.2266 1.89339C11.2084 1.89155 11.1902 1.89063 11.1719 1.89062H4.60889C4.31891 1.89096 4.0409 2.0063 3.83585 2.21134C3.63081 2.41639 3.51547 2.6944 3.51514 2.98438V15.0156C3.51547 15.3056 3.63081 15.5836 3.83585 15.7887C4.0409 15.9937 4.31891 16.109 4.60889 16.1094H14.4532C14.7431 16.109 15.0212 15.9937 15.2262 15.7887C15.4312 15.5836 15.5466 15.3056 15.5469 15.0156V6.27621C15.547 6.27263 15.5475 6.2692 15.5475 6.26562C15.5475 6.19264 15.5329 6.1204 15.5045 6.05317C15.4761 5.98594 15.4345 5.9251 15.3821 5.87426ZM11.7188 12.2812H7.3438C7.19876 12.2812 7.05966 12.2236 6.9571 12.1211C6.85454 12.0185 6.79692 11.8794 6.79692 11.7344C6.79692 11.5893 6.85454 11.4502 6.9571 11.3477C7.05966 11.2451 7.19876 11.1875 7.3438 11.1875H11.7188C11.8638 11.1875 12.0029 11.2451 12.1055 11.3477C12.2081 11.4502 12.2657 11.5893 12.2657 11.7344C12.2657 11.8794 12.2081 12.0185 12.1055 12.1211C12.0029 12.2236 11.8638 12.2812 11.7188 12.2812ZM11.7188 10.0938H7.3438C7.19876 10.0938 7.05966 10.0361 6.9571 9.93357C6.85454 9.83102 6.79692 9.69192 6.79692 9.54688C6.79692 9.40183 6.85454 9.26273 6.9571 9.16018C7.05966 9.05762 7.19876 9 7.3438 9H11.7188C11.8638 9 12.0029 9.05762 12.1055 9.16018C12.2081 9.26273 12.2657 9.40183 12.2657 9.54688C12.2657 9.69192 12.2081 9.83102 12.1055 9.93357C12.0029 10.0361 11.8638 10.0938 11.7188 10.0938ZM11.1719 6.26562V3.21088L14.2266 6.26562H11.1719Z"
                    fill="#0098DB"
                  />
                </svg>

                <span style={{ marginLeft: "10px", whiteSpace: "nowrap" }}>Generate statement</span>
              </button>
            </div>
          </Col>
          <Col>
            <p style={{ marginTop: "30px" }} onclick={change_text}>
              <img src="register/image/eyes.svg" alt="" /> Hide balance
            </p>
          </Col>
        </Row>

        <p style={{ marginTop: "50px", fontSize: "16px", fontweight: "500" }}>Recent Transactions</p>

        <div style={{ textAlign: "center" }}>
          <Row style={{ width: "900px" }}>
            <Col xs={3}>
              <div style={{ textAlign: "left", color: "#94A2AB" }}>
                <p
                  style={{
                    color: "#0098DB",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  All Transactions
                </p>
                <p>Debit Transactions</p>
                <p>Credit Transactions</p>
              </div>
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
                      <rect width="33" height="33" rx="16.5" fill="#FFF7F7" />
                      <path d="M15.9181 13.7727L12.3422 12.8145L11.3841 16.3904" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.1118 19.2658C20.9093 19.9601 19.4802 20.1482 18.139 19.7888C16.7978 19.4295 15.6543 18.552 14.96 17.3495L12.3423 12.8155" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Col>
                  <Col xs={6}>
                    {" "}
                    <p style={{ marginleft: "-20px", marginTop: " 10px" }}>Transfer from Emmanuella Etuk </p>
                    <p
                      style={{
                        color: "#3BA871",
                        marginLeft: "-145px",
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
                    <svg style={{ marginTop: "20px" }} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="33" height="33" rx="16.5" fill="#F5FBF8" />
                      <path d="M16.9758 19.2273L13.3999 20.1855L12.4418 16.6096" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M23.1695 13.7342C21.967 13.0399 20.5379 12.8518 19.1967 13.2112C17.8555 13.5705 16.712 14.448 16.0177 15.6505L13.4 20.1845" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Col>
                  <Col xs={6}>
                    {" "}
                    <p style={{ marginleft: "-20px", marginTop: " 10px" }}>Transfer to Oluwaseun Orofin </p>
                    <p
                      style={{
                        color: "#ED5B5C",
                        marginLeft: "-145px",
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
                    <svg style={{ marginTop: "20px" }} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="33" height="33" rx="16.5" fill="#FFF7F7" />
                      <path d="M15.9181 13.7727L12.3422 12.8145L11.3841 16.3904" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.1118 19.2658C20.9093 19.9601 19.4802 20.1482 18.139 19.7888C16.7978 19.4295 15.6543 18.552 14.96 17.3495L12.3423 12.8155" stroke="#ED5B5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Col>
                  <Col xs={6}>
                    {" "}
                    <p style={{ marginleft: "-20px", marginTop: " 10px" }}>Transfer from Emmanuella Etuk </p>
                    <p
                      style={{
                        color: "#3BA871",
                        marginLeft: "-145px",
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
                    <svg style={{ marginTop: "20px" }} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="33" height="33" rx="16.5" fill="#F5FBF8" />
                      <path d="M16.9758 19.2273L13.3999 20.1855L12.4418 16.6096" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M23.1695 13.7342C21.967 13.0399 20.5379 12.8518 19.1967 13.2112C17.8555 13.5705 16.712 14.448 16.0177 15.6505L13.4 20.1845" stroke="#3BA871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Col>
                  <Col xs={6}>
                    {" "}
                    <p style={{ marginleft: "-20px", marginTop: " 10px" }}>Transfer to Oluwaseun Orofin </p>
                    <p
                      style={{
                        color: "#ED5B5C",
                        marginLeft: "-145px",
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
        </div>
      </Container>
    </>
  );
}

export default Home;
