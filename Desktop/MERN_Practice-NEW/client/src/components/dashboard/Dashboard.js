import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { deleteAccount, getCurrentProfile } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="pl-20 bg-slate-100">
        <h1 className=" text-slate-700 text-4xl font-bold py-4">Dashboard</h1>
        <p className="py-4 text-lg">
          <i className="fas fa-user"></i> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <>
            <DashboardActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div className="py-10">
              <button className="btn btn-error" onClick={deleteAccount}>
                <i className="fas fa-user-minus"></i> Delete My Account
              </button>
            </div>
          </>
        ) : (
          <div className="min-h-screen">
            <p className="pt-5 pb-10">
              You have not yet setup a profile, please add some info
            </p>
            <Link to="/create-profile" className="btn btn-outline my-1">
              Create Profile
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
