import React, { useState } from "react";
import SideBar from "./SideBar";
import "../App.css";
import SettlementModal from "./SettlementModal";

function Settlement() {
  const [page, setPage] = useState("page1");
  const [modal, setModal] = useState(false);

  function changePage(newPage) {
    setPage(newPage);
  }
  return (
    <>
      <SideBar />
      <div className="settlement-transaction-table">
        <h2 className="main-transaction-header">Recent Settlement</h2>

        <div className="settlement-table-options">
          <div className="settlement-table-input">
            <svg
              className="search-transaction"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              //   className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input className="search-transaction" style={{ border: "none", marginRight: "-26rem", marginBottom: "15px", outline: "none", width: "600px", height: "auto" }} type="text" placeholder="Search for settlement" />
          </div>

          <div style={{ marginLeft: "50px" }} className="settlement-table-filter">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 10H15" stroke="#4D708D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1.875 6.25H18.125" stroke="#4D708D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.125 13.75H11.875" stroke="#4D708D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Filters
          </div>
          <div style={{ marginRight: "10px" }} className="settlement-table-filter">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.71875 4.53039L10 1.25L13.2812 4.53039" stroke="#4D708D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 9.9999V1.2522" stroke="#4D708D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M13.75 7.5H15.625C15.7908 7.5 15.9497 7.56585 16.0669 7.68306C16.1842 7.80027 16.25 7.95924 16.25 8.125V16.25C16.25 16.4158 16.1842 16.5747 16.0669 16.6919C15.9497 16.8092 15.7908 16.875 15.625 16.875H4.375C4.20924 16.875 4.05027 16.8092 3.93306 16.6919C3.81585 16.5747 3.75 16.4158 3.75 16.25V8.125C3.75 7.95924 3.81585 7.80027 3.93306 7.68306C4.05027 7.56585 4.20924 7.5 4.375 7.5H6.25"
                stroke="#4D708D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Export
          </div>
        </div>
        <table className="transaction-table-output" onClick={() => setModal(true)}>
          <thead>
            <tr>
              <th>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                </svg>
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.09646 0.356491C9.06807 0.287969 9.02001 0.229403 8.95834 0.188198C8.89667 0.146993 8.82417 0.125 8.75 0.125H1.25C1.17583 0.125 1.10333 0.146993 1.04166 0.1882C0.979991 0.229406 0.931926 0.287974 0.903544 0.356498C0.875161 0.425021 0.867736 0.500422 0.882207 0.573166C0.896678 0.645909 0.932395 0.712728 0.984842 0.765172L4.73484 4.51516C4.76966 4.54998 4.811 4.57761 4.8565 4.59645C4.90199 4.6153 4.95076 4.625 5 4.625C5.04925 4.625 5.09801 4.6153 5.14351 4.59645C5.189 4.57761 5.23034 4.54998 5.26516 4.51516L9.01516 0.765172C9.06761 0.712727 9.10332 0.645907 9.1178 0.573162C9.13227 0.500418 9.12484 0.425016 9.09646 0.356491Z"
                    fill="#E3E7EB"
                  />
                </svg>
              </th>
              <th>Response Date</th>
              <th>Terminal</th>
              <th>Amount</th>
              <th>Account DR</th>
              <th>Account CR</th>
              <th>Account Name</th>
              <th>NIBBS Response</th>
              <th>{/* <!-- intentional blank --> */}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                </svg>
              </td>
              <td>3/4/16</td>
              <td>220626160803</td>
              <td>$450.54</td>
              <td>G2004T12167</td>
              <td>G2004T12167</td>
              <td>Dariene Robertson</td>
              <td>
                Error Processing
                <br />
                Request (No Response)
              </td>
              <td>
                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#00325C" />
                  <circle cx="11" cy="2" r="2" fill="#00325C" />
                  <circle cx="20" cy="2" r="2" fill="#00325C" />
                </svg>
              </td>
            </tr>
            <tr style={{ background: "#f9f9fa" }}>
              <td>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                </svg>
              </td>
              <td>9/23/16</td>
              <td>220626160803</td>
              <td>$928.41</td>
              <td>G2004T12167</td>
              <td>G2004T12167</td>
              <td>Jerome Bell</td>
              <td>
                Error Processing
                <br />
                Request (No Response)
              </td>
              <td>
                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#00325C" />
                  <circle cx="11" cy="2" r="2" fill="#00325C" />
                  <circle cx="20" cy="2" r="2" fill="#00325C" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                </svg>
              </td>
              <td>10/28/12</td>
              <td>220626160803</td>
              <td>$396.84</td>
              <td>G2004T12167</td>
              <td>G2004T12167</td>
              <td>Cameron Williamson</td>
              <td>
                Error Processing
                <br />
                Request (No Response)
              </td>

              <td>
                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#00325C" />
                  <circle cx="11" cy="2" r="2" fill="#00325C" />
                  <circle cx="20" cy="2" r="2" fill="#00325C" />
                </svg>
              </td>
            </tr>
            <tr style={{ background: "#f9f9fa" }}>
              <td>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                </svg>
              </td>
              <td>8/16/13</td>
              <td>220626160803</td>
              <td>$778.35</td>
              <td>G2004T12167</td>
              <td>G2004T12167</td>
              <td>Courtney Henry</td>
              <td>
                Error Processing
                <br />
                Request (No Response)
              </td>

              <td>
                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#00325C" />
                  <circle cx="11" cy="2" r="2" fill="#00325C" />
                  <circle cx="20" cy="2" r="2" fill="#00325C" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                </svg>
              </td>
              <td>4/21/12</td>
              <td>220626160803</td>
              <td>$589.99</td>
              <td>G2004T12167</td>
              <td>G2004T12167</td>
              <td>Darrell Steward</td>
              <td>
                Error Processing
                <br />
                Request (No Response)
              </td>
              <td>
                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#00325C" />
                  <circle cx="11" cy="2" r="2" fill="#00325C" />
                  <circle cx="20" cy="2" r="2" fill="#00325C" />
                </svg>
              </td>
            </tr>
            <tr style={{ background: "#f9f9fa" }}>
              <td>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                </svg>
              </td>
              <td>1/31/14</td>
              <td>220626160803</td>
              <td>$767.50</td>
              <td>G2004T12167</td>
              <td>G2004T12167</td>
              <td>Esther Howard</td>
              <td>
                Error Processing
                <br />
                Request (No Response)
              </td>
              <td>
                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#00325C" />
                  <circle cx="11" cy="2" r="2" fill="#00325C" />
                  <circle cx="20" cy="2" r="2" fill="#00325C" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                </svg>
              </td>
              <td>4/4/18</td>
              <td>220626160803</td>
              <td>$473.85</td>
              <td>G2004T12167</td>
              <td>G2004T12167</td>
              <td>Jacob Jones</td>
              <td>
                Error Processing
                <br />
                Request (No Response)
              </td>
              <td>
                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#00325C" />
                  <circle cx="11" cy="2" r="2" fill="#00325C" />
                  <circle cx="20" cy="2" r="2" fill="#00325C" />
                </svg>
              </td>
            </tr>
            <tr style={{ background: "#f9f9fa" }}>
              <td>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                </svg>
              </td>
              <td>4/4/18</td>
              <td>220626160803</td>
              <td>$948.55</td>
              <td>G2004T12167</td>
              <td>G2004T12167</td>
              <td>Jacob Jones</td>
              <td>
                Error Processing
                <br />
                Request (No Response)
              </td>
              <td>
                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#00325C" />
                  <circle cx="11" cy="2" r="2" fill="#00325C" />
                  <circle cx="20" cy="2" r="2" fill="#00325C" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                </svg>
              </td>
              <td>4/4/18</td>
              <td>220626160803</td>
              <td>$105.55</td>
              <td>G2004T12167</td>
              <td>G2004T12167</td>
              <td>Jacob Jones</td>
              <td>
                Error Processing
                <br />
                Request (No Response)
              </td>
              <td>
                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#00325C" />
                  <circle cx="11" cy="2" r="2" fill="#00325C" />
                  <circle cx="20" cy="2" r="2" fill="#00325C" />
                </svg>
              </td>
            </tr>
            <tr style={{ background: "#f9f9fa" }}>
              <td>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                </svg>
              </td>
              <td>4/4/18</td>
              <td>220626160803</td>
              <td>$948.55</td>
              <td>G2004T12167</td>
              <td>G2004T12167</td>
              <td>Jacob Jones</td>
              <td>
                Error Processing
                <br />
                Request (No Response)
              </td>
              <td>
                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#00325C" />
                  <circle cx="11" cy="2" r="2" fill="#00325C" />
                  <circle cx="20" cy="2" r="2" fill="#00325C" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                </svg>
              </td>
              <td>4/4/18</td>
              <td>220626160803</td>
              <td>$105.55</td>
              <td>G2004T12167</td>
              <td>G2004T12167</td>
              <td>Jacob Jones</td>
              <td>
                Error Processing
                <br />
                Request (No Response)
              </td>
              <td>
                <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#00325C" />
                  <circle cx="11" cy="2" r="2" fill="#00325C" />
                  <circle cx="20" cy="2" r="2" fill="#00325C" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>

        {/*  footer section  */}
        <footer>
          <div className="settlement-footer">
            <div className="footer-pages">1-11 of 1200 pages</div>
            <h3 className="footer-page-info">The page you're on</h3>
            <div className="footer-number">
              <select onChange={(event) => changePage(event.target.value)} value={page} style={{ border: "none", color: "#4d708d", fontFamily: "Euclid Circular B", outline: "none" }}>
                <option value="page1">1 - 11</option>
                <option value="page2">12 - 22</option>
                <option value="page3">23 - 32</option>
                <option value="page4">33 - 42</option>
                <option value="page5">43 - 52</option>
                <option value="page6">53 - 62</option>
                <option value="page7">63 - 72</option>
              </select>

              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.25 0.75L4.125 3.875L1 0.75" stroke="#4D708D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="next-page-click">
              <svg style={{ paddingTop: "17px", paddingBottom: "15px", paddingLeft: "10px" }} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 13.5L1.25 7.25L7.5 1" stroke="#707885" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg style={{ paddingTop: "17px", paddingBottom: "15px" }} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1L7.75 7.25L1.5 13.5" stroke="#00325C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </footer>
      </div>
      {modal && <SettlementModal closeModal={setModal} />}
    </>
  );
}

export default Settlement;
