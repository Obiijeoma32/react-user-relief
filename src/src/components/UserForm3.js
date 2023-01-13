import "../App.css";

function UserForm3({ closeForm }) {
  return (
    <>
      <div className="user-modal-form3">
        <div className="user-modal-box-third" onClick={closeForm}></div>
        <div className="user-modal-form">
          <div className="user-modal-card-form2">
            <div className="user-listing">
              <h3 className="form-list-header">Add User</h3>
              <form className="form-user">
                <input className="user-input-form" type="number" placeholder="Company Registration No" />
                <input className="user-input-form" type="text" placeholder="Company Name" />
                <input className="user-input-form" type="number" placeholder="Bank Verification Number" />
                <input className="user-input-form" type="email" placeholder="Email Address" />
                <input className="user-input-form" type="number" placeholder="Agent Account No" />
                <input className="user-input-form" type="text" placeholder="Select Bank" />
                <input className="user-input-form" type="text" placeholder="Guarantor's Address" />
                <br />
                <input className="user-form-terms" style={{ color: "#4d708d", fontSize: "14px", marginTop: "25px" }} type="checkbox" />
                <label style={{ color: "#4d708d", fontSize: "14px", marginTop: "25px" }} htmlFor="terms">
                  Terms & Conditions
                </label>
                <br />
                <button className="user-form-button3-submit" type="submit">
                  Create User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserForm3;
