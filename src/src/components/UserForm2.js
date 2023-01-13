import "../App.css";

function UserForm2({ closeForm, handleNextFormbutton }) {
  return (
    <>
      <div className="user-modal-form-box1">
        <div className="user-modal-box-second" onClick={closeForm}></div>
        <div className="user-modal-form">
          <div className="user-modal-card-form">
            <div className="user-listing">
              <h3 className="form-list-header">Add User</h3>
              <form className="form-user">
                <input className="user-input-form" type="text" placeholder="ID Type" required />
                <input className="user-input-form" type="number" placeholder="ID Number" required />
                <input className="user-input-form" type="text" placeholder="Nationality" required />
                <input className="user-input-form" type="text" placeholder="Mother's Maiden Name" required />
                <input className="user-input-form" type="text" placeholder="Business Address" required />
                <input className="user-input-form" type="text" placeholder="State/City" required />
                <input className="user-input-form" type="text" placeholder="Agent" required />
                <button onClick={handleNextFormbutton} className="user-form-button2-submit" type="button">
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserForm2;
