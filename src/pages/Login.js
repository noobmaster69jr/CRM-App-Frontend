import {useState} from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap'
import { userSignin } from '../api/auth'


/*
POST API 
1. Grab the data 
2. Store the data 
3. Call the api */

function Login(){
    const [showSignup, setShowSignup] = useState(false)
    const [userType, setUserType] = useState("CUSTOMER")
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")


    const toggleSignup = () =>{
        setShowSignup(!showSignup)
    }
    const handleClick = (e) =>{
        setUserType(e)
    }

    const updateSignupData = (e) =>{
       if (e.target.id === "userid") {
         setUserId(e.target.value);
       } else if (e.target.id === "password") {
         setPassword(e.target.value);
       }
    }

    const signupFn = () => {
      console.log("Sign up button triggered");
    };

    const loginFn = (e) => {
      e.preventDefault();

      const data = {
        userId: userId,
        password: password,
      };

      userSignin(data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <div className="bg-info d-flex justify-content-center align-items-center vh-100">
        <div
          className="card p-5 rounded-4 shadow-lg"
          style={{ width: 20 + "rem" }}
        >
          <h4 className="text-center text-info">
            {showSignup ? "Sign Up" : "Sign In"}
          </h4>

          <form onSubmit={showSignup ? signupFn : loginFn}>
            <div className="input-group">
              <input
                type="text"
                className="form-control m-1"
                placeholder="User id"
                value={userId}
                onChange={updateSignupData}
                id="userid"
              />
            </div>

            {showSignup && (
              <>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control m-1"
                    placeholder="Username"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control m-1"
                    placeholder="Email"
                  />
                </div>
                <div className="d-flex justify-content-between m-1">
                  <span className="my-1">User Type</span>
                  <DropdownButton
                    align="end"
                    title={userType}
                    id="userType"
                    variant="light"
                    onSelect={handleClick}
                  >
                    <Dropdown.Item eventKey="CUSTOMER"> CUSTOMER</Dropdown.Item>
                    <Dropdown.Item eventKey="ENGINEER"> ENGINEER</Dropdown.Item>
                  </DropdownButton>
                </div>
              </>
            )}
            <div className="input-group">
              <input
                type="password"
                className="form-control m-1"
                placeholder="Password"
                id="password"
                value={password}
                onChange={updateSignupData}
              />
            </div>

            <div className="input-group">
              <input
                type="submit"
                className="btn btn-info fw-bolder form-control m-1 text-white"
                value={showSignup ? "Sign Up" : "Log In"}
              />
            </div>
            <div
              className="m-1 text-center text-primary"
              onClick={toggleSignup}
            >
              {showSignup
                ? "Already have an account? Signin"
                : "Don't have an account? Sign up"}
            </div>
          </form>
        </div>
      </div>
    );
}

export default Login;