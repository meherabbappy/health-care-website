import React from "react";
import useFirebase from "../../../hooks/useFirebase";

const Login = () => {
  const { signInUsingGoogle } = useFirebase();

  return (
    <div className = "container">
      <h2>Please Login </h2>

      <form>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" for="gridCheck1">
                Example checkbox
              </label>
             
            </div>
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary m-3">
          Sign in
        </button>
      </form>
      <p>------Or Sign In With Google------</p>
      <button className="m-3" onClick={signInUsingGoogle}>Google SignIn</button>
    </div>
  );
};

export default Login;
