import { Routes, Route, BrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar";
import Transaction from "./components/Transaction";
import Settlement from "./components/Settlement";
import User from "./components/User";
import Loans from "./components/Loans";
import Dispute from "./components/Dispute";
import Accounts from "./components/Account";
import Terminal from "./components/Terminal";
import Dashboard from "./components/Dashboard";
import "./App.css";
import LogOut from "./components/LogOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/settlement" element={<Settlement />} />
            <Route path="/user" element={<User />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/dispute" element={<Dispute />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/terminal" element={<Terminal />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </>
  );
}

export default App;
