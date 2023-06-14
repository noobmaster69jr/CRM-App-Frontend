import Login from "./pages/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './pages/Admin.js'
import Customer from './pages/Customer'
import Engineer from './pages/Engineer'
import NotFound from './pages/NotFound'
import RequireAuth from './components/RequireAuth'
import Unauth from "./pages/Unauthorized";

// Login/ signup page -> for 3 types of users
// 3 types of user :

//ADMIN : Log in, all tickets, all users -> give permission to user

//ENGINEER : Sign up, login after approval, edit tickets that are assigned to them -> edit the status

//CUSTOMER : Sign up, login in, raise the ticket, edit the ticket status -> open/close

const ROLES = {
  CUSTOMER: "CUSTOMER",
  ADMIN: "ADMIN",
  ENGINEER: "ENGINEER",
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/*protected routes by require auth start*/}
          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.ENGINEER]} />}>
            <Route path="/engineer" element={<Engineer />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.CUSTOMER]} />}>
            <Route path="/customer" element={<Customer />} />
          </Route>
          {/* Protected routes by require auth end */}

          <Route path="/*" element={<NotFound />} />
          <Route path="/unauthorized" element={<Unauth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
