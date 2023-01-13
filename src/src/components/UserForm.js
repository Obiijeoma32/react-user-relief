import { useState } from "react";
import "../App.css";

function UserForm({ handleNextButton, closeForm }) {
  const [page, setPage] = useState("option");
  function changePage(newPage) {
    setPage(newPage);
  }

  return (
    <>
      <div className="user-modal-form2">
        <div className="user-modal-box-first" onClick={closeForm}></div>
        <div className="user-modal-form">
          <div className="user-modal-card-form">
            <div className="user-listing">
              <h3 className="form-list-header">Add User</h3>
              <form className="form-user">
                <input className="user-input-form" type="text" placeholder="Enter First Name" required />
                <br />
                <input className="user-input-form" type="text" placeholder="Enter Last Name" required />
                <br />
                <input className="user-input-form" type="number" placeholder="Contact Phone" required />
                <br />
                <input className="user-input-form" type="text" placeholder="Enter Residential Address" required />
                <br />
                <input className="user-input-form input" placeholder="Select D.O.B" type="date" id="date" required />
                <br />
                <select onChange={(event) => changePage(event.target.value)} value={page} className="user-selection" id="gender" required>
                  <option value="option">Select Gender</option>
                  <option value="man">Male</option>
                  <option value="woman">Female</option>
                  <option value="another">Other</option>
                </select>
                <br />
                <input className="user-input-form" type="text" placeholder="Place of Birth" />

                <button onClick={handleNextButton} className="user-form-button-submit" type="button">
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* {next && <UserForm2 closeForm2={setNext} />} */}
    </>
  );
}

export default UserForm;
