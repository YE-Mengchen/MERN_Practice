import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className="mockup-code w-2/3 flex flex-col my-10">
      <pre data-prefix="1">
        <code>Name: {name}</code>
      </pre>
      <pre data-prefix="2">
        <code>
          Status: {status}
          {company && <span> at {company}</span>}
        </code>
      </pre>
      <pre data-prefix="3">
        <code>
          Location:{" "}
          {location ? (
            <span>{location}</span>
          ) : (
            <span>Prefer not to share</span>
          )}
        </code>
      </pre>
      <pre data-prefix="4">
        <code>
          Skills:{" "}
          <span>
            [
            {skills.slice(0, 4).map((skill, index) => (
              <span key={index}>
                {index !== 0 && ", "}
                {skill}
              </span>
            ))}
            ]
          </span>
        </code>
      </pre>
      <pre
        data-prefix="5"
        className="bg-warning text-warning-content transition duration-500 ease-in-out transform hover:scale-105 hover:bg-green-500"
      >
        <code>
          <Link to={`/profile/${_id}`} className="hover:underline">
            Click here to view profile
          </Link>
        </code>
      </pre>
    </div>

    // <div className="profile bg-light">
    //   <div>
    //     <h2>{name}</h2>
    //     <p>
    //       {status} {company && <span> at {company}</span>}
    //     </p>
    //     <p className="my-1">{location && <span>{location}</span>}</p>
    //     <Link to={`/profile/${_id}`} className="btn btn-primary">
    //       View Profile
    //     </Link>
    //   </div>
    //   <ul>
    //     {skills.slice(0, 4).map((skill, index) => (
    //       <li key={index} className="text-primary">
    //         <i className="fas fa-check" /> {skill}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
