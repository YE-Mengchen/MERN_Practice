import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <tr>
    <td>{company}</td>
    <td>{title}</td>
    <td>{location}</td>
    <td>
      <Moment format="YYYY-MM-DD">{from}</Moment> -
      {to ? <Moment format="YYYY-MM-DD">{to}</Moment> : "Now"}
    </td>
    <td>{description}</td>
  </tr>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
