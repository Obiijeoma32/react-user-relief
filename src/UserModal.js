import "../src/components/App.css";

function UserModal({ closeModal }) {
  return (
    <>
      <div className="user-modal1">
        <div className="user-modal-box" onClick={() => closeModal(false)}></div>
        <div className="user-modal-content">
          <div className="user-modal-card">
            <div className="user-listing">
              <h3 className="list-header">Users Listing</h3>
              <div className="user-listing-details">
                <div className="user-list-box1">
                  <h4>
                    <span className="list-tag"> User ID: </span>
                    <br />
                    <h3 className="list-id">Valentine</h3>
                  </h4>
                  <h4>
                    <span className="list-tag"> Role ID:</span>
                    <br />
                    <h3 className="list-id">Superadmin</h3>
                  </h4>
                  <h4>
                    <span className="list-tag"> User Status:</span>
                    <h4 style={{ marginBottom: "23px", marginTop: "3px" }} className="enabled">
                      Enabled
                    </h4>
                  </h4>
                  <h4>
                    <span className="list-tag"> Card No.:</span>
                    <br />
                    <h3 className="list-id">2020-03-05 15:43:36</h3>
                  </h4>
                </div>
                <div className="user-list-box2">
                  <h4>
                    <span className="list-tag"> First name: </span>
                    <br />
                    <h3 className="list-id">Darlene</h3>
                  </h4>
                  <h4>
                    <span className="list-tag"> Last Name:</span>
                    <br />
                    <h3 className="list-id">Robertson</h3>
                  </h4>
                  <h4>
                    <span className="list-tag"> Email Address:</span>
                    <br />
                    <h3 className="list-id">akinwale10@gmail.com</h3>
                  </h4>
                  <h4>
                    <span className="list-tag"> User Account:</span>
                    <br />
                    <h3 className="list-id">450000005</h3>
                  </h4>
                  <h4>
                    <span className="list-tag"> Bank Name:</span>
                    <br />
                    <h3 className="list-id">Ecobank</h3>
                  </h4>
                </div>
              </div>
            </div>
            <div className="user-button-handle">
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

export default UserModal;
