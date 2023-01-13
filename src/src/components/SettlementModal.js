import "../App.css";

function SettlementModal({ closeModal }) {
  return (
    <>
      <div className="settlement-modal1-box">
        <div className="user-modal-box" onClick={() => closeModal(false)}></div>
        <div className="settlement-modal-content">
          <div className="settlement-modal-card">
            <div className="settlement-box-listing">
              <h3 className="list-header">Settlement Details</h3>
              <div className="settlement-listing-details">
                <div className="settlement-list-box1">
                  <h4>
                    <span className="list-tag"> Amount: </span>
                    <br />
                    <h3 style={{ fontSize: "18px", color: "#4d708d", fontFamily: "Euclid Circular B" }} className="list-id">
                      ₦50,000.00
                    </h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Terminal Name:</span>
                    <br />
                    <h3 className="list-id">Nubeero 17/URAMA</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">RRN.:</span>
                    <h4 className="list-id">2HIGSS01</h4>
                  </h4>
                  <h4>
                    <span className="list-tag">CR Account:</span>
                    <br />
                    <h3 className="list-id">134655592444</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">DR Account:</span>
                    <br />
                    <h3 className="list-id">134655592444</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Settlement Amount:</span>
                    <br />
                    <h3 className="list-id">$2,44.32</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Settlement Fee:</span>
                    <br />
                    <h3 className="list-id">$3.02</h3>
                  </h4>
                </div>
                <div className="settlement-list-box2">
                  <h4>
                    <span className="list-tag">Date: </span>
                    <br />
                    <h3 style={{ fontSize: "18px", color: "#4d708d", fontFamily: "Euclid Circular B" }} className="list-id">
                      2022-06-26 18:58:39
                    </h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Account Name:</span>
                    <br />
                    <h3 className="list-id">Darlene Robertson</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Bank Code:</span>
                    <br />
                    <h3 className="list-id">NGN</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Transaction Refrence:</span>
                    <br />
                    <h3 className="list-id">T204432FM007708202</h3>
                  </h4>

                  <h4>
                    <span className="list-tag">Transaction Refrence:</span>
                    <br />
                    <h3 className="list-id">T204432FM007708202</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Transaction Status:</span>
                    <br />
                    <h3 className="list-id">Success</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">NIBSS RESPONSE:</span>
                    <br />
                    <h3 className="list-id">Approved or completed successfully</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Transfer Fee:</span>
                    <br />
                    <h3 className="list-id">650</h3>
                  </h4>
                </div>
              </div>
            </div>
            <div className="button-for-settlement">
              <button className="settlement-close-button" type="button" onClick={() => closeModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettlementModal;
