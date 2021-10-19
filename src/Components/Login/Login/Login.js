import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import useAuth from './../../../hooks/useAuth';


const Login = () => {

    const { signInUsingGoogle, setUser, error, setError, handleUserRegister,
        handleUserLogin, } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [isLogin, setIsLogin] = useState(false);



    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'
    // google login
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setError("");
                setUser(result.user)
                history.push(redirect_url)
            })
    }


    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleEmailRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be 6 characters long.");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password must contain 2 upper case");
            return;
        }

        isLogin ? processLogin(email, password) : registerUser(email, password);
    };
    const processLogin = (email, password) => {
        handleUserLogin(email, password)
        history.push(redirect_url)
    };
    const registerUser = (email, password) => {
        handleUserRegister(email, password)
        history.push(redirect_url)
    };




    return (
        <div className=" w-50  mx-auto">
            <form className="fw-bold" onSubmit={handleEmailRegistration}>
                <h3 className="text-primary m-5">
                    Please {isLogin ? "Login" : "Register"}
                </h3>
                {!isLogin && (
                    <div className="row mb-3">
                        <label  htmlFor="inputName" className="col-sm-2 col-form-label pt-4">
                            Name:
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                onBlur={handleNameChange}
                                className="form-control"
                                id="inputName"
                                required
                                placeholder="Enter Name"
                            />
                        </div>
                    </div>
                )}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label pt-4">
                        Email:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            onBlur={handleEmailChange}
                            className="form-control"
                            id="inputEmail3"
                            required
                            placeholder="Enter Email"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label pt-4">
                        Password:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            onBlur={handlePasswordChange}
                            className="form-control"
                            id="inputPassword3"
                            required
                            placeholder="Enter Password"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check mx-5 px-5">
                            <input
                                onChange={toggleLogin}
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck1"
                            />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already registered
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className=" google-btn">
                    {isLogin ? "Login" : "Register"}
                </button>
                <br />
                <br />

            </form>

            <div className="text-danger fw-bold">--Or Google SignIn--</div>
            <br />
            
            
            <button className="google-btn" onClick={handleGoogleSignIn}><i class="fab fa-google fs-4 "></i>oogle sign in</button>
        </div>
    );
};

export default Login;