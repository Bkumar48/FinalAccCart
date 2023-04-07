import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import $ from "jquery";
const LoginPage = () => {
    
    
  const signupMode = () => {
    $( ".container" ).addClass( "sign-up-mode" );
  };

    const signinMode = () => { 
        $( ".container" ).removeClass( "sign-up-mode" );
    };


  // ****************** Signup Form State Variables and Functions Start Here ******************
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // ****************** Signup Form State Variables and Functions End Here ******************

  // ****************** Signup Form Submit Handler Start Here ******************
  const signupSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        {
          firstName,
          lastName,
          email: signupEmail,
          mobile,
          password: signupPassword,
          confirmPassword,
        },
        config
      );
      setLoading(false);
      console.log(data);
      setSuccess(true);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/dashboard");
      enqueueSnackbar("Signup Successful", { variant: "success" });
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      enqueueSnackbar(error, { variant: "error" });
    }
  };
  // ****************** Signup Form Submit Handler End Here ******************

  // ****************** Login Form State Variables and Functions Start Here ******************
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  //  Login Form State Variables and Functions End Here

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  //   ****************** Signup Form Submit Handler Start Here ******************
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        {
          email,
          password,
        },
        config
      );
      setLoading(false);
      console.log(data);
      setSuccess(true);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/dashboard");
      enqueueSnackbar("Login Successful", { variant: "success" });
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      enqueueSnackbar(error.response.data.message, { variant: "error" });
    }
  };
  //   ****************** Signup Form Submit Handler End Here ******************

  return (
    <>
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Login"
                class="btn solid"
                onClick={submitHandler}
              />
              <p class="social-text">Or Sign in with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form action="#" class="sign-up-form">
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input
                  type="text"
                  placeholder="Mobile No."
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                class="btn"
                value="Sign up"
                onClick={signupSubmitHandler}
              />
              <p class="social-text">Or Sign up with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                class="btn transparent"
                id="sign-up-btn"
                onClick={signupMode}
              >
                Sign up
              </button>
            </div>
            <img src="assets\login.svg" class="image" alt="" />
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                class="btn transparent"
                id="sign-in-btn"
                onClick={signinMode}
              >
                Sign in
              </button>
            </div>
            <img src="assets\welcome.svg" class="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
