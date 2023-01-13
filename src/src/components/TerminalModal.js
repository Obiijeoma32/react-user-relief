import "../App.css";

function TerminalModal({ closeModal }) {
  return (
    <>
      <div className="terminal-modal1">
        <div className="user-modal-box" onClick={() => closeModal(false)}></div>
        <div className="terminal-modal-content">
          <div className="terminal-modal-card">
            <div className="terminal-listing">
              <h3 className="list-header">Terminal Listing</h3>
              <div className="terminal-listing-details">
                <div className="terminal-list-box1">
                  <h4>
                    <span className="terminal-list-tag">Terminal ID: </span>
                    <br />
                    <h3 className="terminal-list-id">220626160803</h3>
                  </h4>
                  <h4>
                    <span className="terminal-list-tag">Terminal Name:</span>
                    <br />
                    <h3 className="terminal-list-id">204432FM</h3>
                  </h4>
                  <h4>
                    <span className="terminal-list-tag">Terminal Serial:</span>
                    <h4 className="terminal-list-id">2HIGSS01</h4>
                  </h4>
                  <h4>
                    <span className="terminal-list-tag">Terminal Modal:</span>
                    <br />
                    <h3 className="terminal-list-id">G2</h3>
                  </h4>
                </div>
                <div className="terminal-list-box2">
                  <h4>
                    <span className="terminal-list-tag">Agend ID: </span>
                    <br />
                    <h3 className="terminal-list-id">aagunbiade</h3>
                  </h4>
                  <h4>
                    <span className="terminal-list-tag">User Status:</span>
                    <br />
                    <h4 className="terminal-enabled">Enabled</h4>
                  </h4>
                  <h4>
                    <span className="terminal-list-tag">Transaction Refrence:</span>
                    <br />
                    <h3 className="terminal-list-id">T204432FM007708202</h3>
                  </h4>
                  <h4>
                    <span className="terminal-list-tag">Terminal Make:</span>
                    <br />
                    <h3 className="terminal-list-id">13NEXGO</h3>
                  </h4>
                  <h4>
                    <span className="terminal-list-tag">Date:</span>
                    <br />
                    <h3 className="terminal-list-id">2022-06-26 18:58:39</h3>
                  </h4>
                </div>
              </div>
            </div>
            <div className="terminal-button-handle">
              <button onClick={() => closeModal(false)} className="user-button-handle-close" type="button">
                Close
              </button>
              <button className="user-button-handle-edit" type="button">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TerminalModal;
