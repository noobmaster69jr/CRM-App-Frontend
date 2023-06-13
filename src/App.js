import Login from "./pages/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './pages/Admin.js'
import Customer from './pages/Customer'
import Engineer from './pages/Engineer'
import NotFound from './pages/NotFound'
// Login/ signup page -> for 3 types of users
// 3 types of user :

//ADMIN : Log in, all tickets, all users -> give permission to user

//ENGINEER : Sign up, login after approval, edit tickets that are assigned to them -> edit the status

//CUSTOMER : Sign up, login in, raise the ticket, edit the ticket status -> open/close

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/engineer" element={<Engineer />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
