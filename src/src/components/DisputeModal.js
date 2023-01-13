import "../App.css";

function DisputeModal({ closeModal }) {
  return (
    <>
      <div className="transaction-modal1-box">
        <div className="user-modal-box" onClick={() => closeModal(false)}></div>
        <div className="transaction-modal-content">
          <div className="transaction-modal-card">
            <div className="transaction-box-listing">
              <h3 className="list-header">Dispute Details</h3>
              <div className="transaction-listing-details">
                <div className="dispute-list-box1">
                  <h4>
                    <span className="list-tag"> Amount: </span>
                    <br />
                    <h3 className="list-id">₦50,000.00</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Terminal Name:</span>
                    <br />
                    <h3 className="list-id">Nubeero 17/URAMA</h3>
                  </h4>
                  <h4>
                    <span className="list-tag"> Terminal No.:</span>
                    <h4 className="list-id">204432FM</h4>
                  </h4>
                  <h4>
                    <span className="list-tag"> RRN.:</span>
                    <br />
                    <h3 className="list-id">2HIGSS01</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Card No.:</span>
                    <br />
                    <h3 className="list-id">134655592********111989</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Card Scheme:</span>
                    <br />
                    <h3 className="list-id">MasterCard</h3>
                  </h4>
                </div>
                <div className="dispute-list-box2">
                  <h4>
                    <span className="list-tag">Date: </span>
                    <br />
                    <h3 className="list-id">2022-06-26 18:58:39</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Customer Name:</span>
                    <br />
                    <h3 className="list-id">Darlene Robertson</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Currency:</span>
                    <br />
                    <h3 className="list-id">NGN</h3>
                  </h4>
                  <h4>
                    <span className="list-tag"> User Account:</span>
                    <br />
                    <h3 className="list-id">450000005</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Transaction Refrence:</span>
                    <br />
                    <h3 className="list-id">T204432FM007708202</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Transaction Type:</span>
                    <br />
                    <h3 className="list-id">Purchase</h3>
                  </h4>
                  <h4>
                    <span className="list-tag">Description:</span>
                    <br />
                    <h3 className="list-id">Approved</h3>
                  </h4>
                </div>
              </div>
            </div>
            <button onClick={() => closeModal(false)} className="transaction-close-button" type="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisputeModal;
