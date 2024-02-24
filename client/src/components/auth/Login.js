import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
// import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="card lg:card-side bg-base-100 shadow-xl w-1/2">
        <figure>
          <img
            src="https://images.pexels.com/videos/5716224/adult-analysis-analyzing-background-5716224.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Album"
            className="w-64 h-full transition duration-1000 ease-in-out transform hover:scale-110"
          />
        </figure>
        <div className="card-body pl-20">
          <h2 className="card-title text-3xl">Sign In</h2>
          <p className="lead">
            <i className="fas fa-user m-2"></i> Sign Into Your Account
          </p>

          <form onSubmit={onSubmit}>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={onChange}
                required
                className="input input-bordered w-3/4 mb-4"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={onChange}
                required
                className="input input-bordered w-3/4 mb-6"
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary btn-wide transition duration-500 ease-in-out transform hover:scale-110"
              value="Login"
            />
          </form>
          <p className="my-1">
            Don't have an account?
            <Link to="/register">
              <button className="btn btn-xs transition duration-500 ease-in-out transform hover:scale-110">
                Sign Up
              </button>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>

    // <>
    //   <h1 className="large text-primary">Sign In</h1>
    //   <p className="lead">
    //     <i className="fas fa-user"></i> Sign Into Your Account
    //   </p>
    //   <form className="form" onSubmit={onSubmit}>
    //     <div className="form-group">
    //       <input
    //         type="email"
    //         placeholder="Email Address"
    //         name="email"
    //         value={email}
    //         onChange={onChange}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         name="password"
    //         minLength="6"
    //         value={password}
    //         onChange={onChange}
    //       />
    //     </div>

    //     <input type="submit" className="btn btn-primary" value="Login" />
    //   </form>
    //   <p className="my-1">
    //     Don't have an account? <Link to="/register">Sign Up </Link>
    //   </p>
    // </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
