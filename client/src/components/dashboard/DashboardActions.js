import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="dash-buttons flex space-x-6">
      <Link to="/edit-profile" className="btn btn-outline">
        <i className="fas fa-user-circle text-black" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-outline">
        <i className="fab fa-black-tie text-black" /> Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-outline">
        <i className="fas fa-graduation-cap text-black" /> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
