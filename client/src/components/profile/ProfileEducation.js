import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <tr>
    <td>{school}</td>
    <td>{degree}</td>
    <td>{fieldofstudy}</td>
    <td>
      <Moment format="YYYY-MM-DD">{from}</Moment> -
      {to ? <Moment format="YYYY-MM-DD">{to}</Moment> : "Now"}
    </td>
    <td>{description}</td>
  </tr>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
