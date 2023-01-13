import "../App.css";

function TerminalForm({ closeForm }) {
  return (
    <>
      <div className="terminal-form2">
        <div className="terminal-modal-box" onClick={() => closeForm(false)}></div>
        <div className="terminal-form">
          <div className="terminal-modal-form">
            <div className="user-listing">
              <h3 className="terminal-form-list-header">Add Terminal</h3>
              <form className="form-terminal">
                <input className="user-input-form" type="text" placeholder="Enter Terminal ID" required />
                <br />
                <input className="user-input-form" type="text" placeholder="Enter Terminal Name" required />
                <br />
                <input className="user-input-form" type="number" placeholder="Enter Terminal Manufacturer" required />
                <br />
                <input className="user-input-form" type="text" placeholder="Enter Terminal Model" required />
                <br />
                <input className="user-input-form" placeholder="Enter Terminal Serial" type="text" required />
                <br />
                <button className="user-form-button-submit" type="submit">
                  Add Terminal
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TerminalForm;
