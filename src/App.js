import Login from "./pages/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

// Login/ signup page -> for 3 types of users
// 3 types of user :

//ADMIN : Log in, all tickets, all users -> give permission to user

//ENGINEER : Sign up, login after approval, edit tickets that are assigned to them -> edit the status

//CUSTOMER : Sign up, login in, raise the ticket, edit the ticket status -> open/close

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
