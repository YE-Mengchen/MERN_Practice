import React from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="flex justify-center text-center text-white flex-col">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="https://framerusercontent.com/assets/kjPYwI8XACw5gauT0OsXTKzaA.mp4"
      />
      <div className=" pt-48">
        <h1 className="text-8xl font-bold">
          <i className="fas fa-code"></i> Developer Connector
        </h1>
        <p className=" w-5/6 mx-auto text-3xl pt-16 text-left">
          Create a developer profile/portfolio to showcase your career
          milestones, share posts to engage with the tech community, and seek
          insights or assistance from fellow developers in a collaborative
          online environment.
        </p>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
