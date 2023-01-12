import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import userSideBar from "./userComponent/SideBar";
import Transaction from "./components/Transaction";
import Settlement from "./components/Settlement";
import User from "./components/User";
import Loans from "./components/Loans";
import Dispute from "./components/Dispute";
import Accounts from "./components/Account";
import Terminal from "./components/Terminal";
import Dashboard from "./components/Dashboard";
import Home from "./userComponent/Home";
import Login from "./Login";
import UserTransaction from "./userComponent/Transaction";
import UserBills from "./userComponent/Bills";
import UserLoan from "./userComponent/Loans";
import UserDispute from "./userComponent/Dispute";
import Split from "./registerUser/Split";
import RegisterBusiness1 from "./registerUser/BusinessRegister1";
import RegisterBusiness2 from "./registerUser/businessRegister2";
import UserRegister1 from "./registerUser/UserRegister1";
import UserRegister2 from "./registerUser/UserRegister2";
import Otp from "./userComponent/otp";
import Success from "./userComponent/Success";
import "../src/components/App.css";
import LogOut from "./LogOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <userSideBar>
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/settlement" element={<Settlement />} />
            <Route path="/user" element={<User />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/dispute" element={<Dispute />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/terminal" element={<Terminal />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/split" element={<Split />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/success" element={<Success />} />
            <Route path="/userRegister1" element={<UserRegister1 />} />
            <Route path="/userRegister2" element={<UserRegister2 />} />
          </Routes>
        </userSideBar>
      </BrowserRouter>

      <BrowserRouter>
        <userSideBar>
          <Routes>
            <Route path="/bills" element={<UserBills />} />
            <Route path="/loans" element={<UserLoan />} />
            <Route path="/dispute" element={<UserDispute />} />
            <Route path="/transfer" element={<UserTransaction />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/registerBusiness" element={<RegisterBusiness1 />} />
            <Route path="/registerBusiness2" element={<RegisterBusiness2 />} />
            <Route exact path="/" element={<Login />} />
          </Routes>
        </userSideBar>
      </BrowserRouter>
    </>
  );
}

export default App;
