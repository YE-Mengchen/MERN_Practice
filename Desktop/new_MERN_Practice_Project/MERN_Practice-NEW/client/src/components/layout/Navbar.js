import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="flex text-xl">
      <li className="mr-10 transition duration-500 ease-in-out transform hover:scale-110">
        <Link to="/profiles">Developers</Link>
      </li>
      <li className="mr-10 transition duration-500 ease-in-out transform hover:scale-110">
        <Link to="/posts">Posts</Link>
      </li>
      <li className="mr-10 transition duration-500 ease-in-out transform hover:scale-110">
        <Link to="/dashboard">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li className="mr-10 transition duration-500 ease-in-out transform hover:scale-110">
        <Link to="/login" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="flex text-xl">
      <li className="mr-10 transition duration-500 ease-in-out transform hover:scale-110">
        <Link to="/profiles">Developers</Link>
      </li>
      <li className="mr-10 transition duration-500 ease-in-out transform hover:scale-110">
        <Link to="/register">Register</Link>
      </li>
      <li className="mr-10 transition duration-500 ease-in-out transform hover:scale-110">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <div className="relative mx-auto p-6 justify-between items-center flex bg-slate-800 font-bold text-white">
      <Link
        to="/"
        className="btn btn-ghost text-2xl transition duration-500 ease-in-out transform hover:scale-110"
      >
        <i className="fas fa-code"></i> <span className="">DevConnector</span>
      </Link>
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
