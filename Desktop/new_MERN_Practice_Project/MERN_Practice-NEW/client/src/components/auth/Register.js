import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

// import axios from 'axios';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="card lg:card-side bg-base-100 shadow-xl w-1/2">
        <figure>
          <img
            src="https://wallpapercave.com/wp/wp4009122.jpg"
            alt="Album"
            className="w-64 h-full transition duration-1000 ease-in-out transform hover:scale-110"
          />
        </figure>
        <div className="card-body pl-20">
          <h2 className="card-title text-3xl">Sign Up</h2>
          <p className="lead">
            <i className="fas fa-user m-2 mb-8"></i> Create Your Account
          </p>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
                required
                className="input input-bordered w-3/4 mb-4"
              />
            </div>
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
                className="input input-bordered w-3/4 mb-4"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength="6"
                value={password2}
                onChange={onChange}
                className="input input-bordered w-3/4 mb-4"
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary btn-wide transition duration-500 ease-in-out transform hover:scale-110"
              value="Register"
            />
          </form>
          <p className="my-1">
            Already have an account?
            <Link to="/login">
              <button className="btn btn-xs transition duration-500 ease-in-out transform hover:scale-110">
                Log In
              </button>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>

    // <>
    //   <h1 className="large text-primary">Sign Up</h1>
    //   <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
    //   <form className="form" onSubmit={onSubmit}>
    //     <div className="form-group">
    //       <input
    //       type="text"
    //       placeholder="Name"
    //       name="name"
    //       value={name}
    //       onChange={onChange}
    //       required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <input type="email"
    //        placeholder="Email Address"
    //         name="email"
    //         value={email}
    //         onChange={onChange}
    //         required
    //          />
    //       <small className="form-text">
    //         This site uses Gravatar so if you want a profile image, use a
    //         Gravatar email
    //       </small>
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
    //     <div className="form-group">
    //       <input
    //         type="password"
    //         placeholder="Confirm Password"
    //         name="password2"
    //         minLength="6"
    //         value={password2}
    //         onChange={onChange}
    //       />
    //     </div>
    //     <input type="submit" className="btn btn-primary" value="Register" />
    //   </form>
    //   <p className="my-1">
    //     Already have an account? <Link to="/login">Sign In</Link>
    //   </p>
    // </>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
