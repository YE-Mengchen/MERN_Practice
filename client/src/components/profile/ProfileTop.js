import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    bio,
    skills,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="mb-10">
      <div className="mockup-window border bg-slate-500 w-2/3">
        <div className="flex flex-col justify-center px-4 py-16 bg-base-300">
          <div className="text-3xl flex justify-center">{name}</div>
          <h2 className="text-black p-2 font-bold text-xl">Status</h2>
          <p className="p-2">
            {status} {company ? <span> at {company}</span> : null}
          </p>
          <h2 className="text-black p-2 font-bold text-xl">Location</h2>
          <p className="p-2">
            {location ? (
              <span>{location}</span>
            ) : (
              <span>Prefer not to tell</span>
            )}
          </p>
          <h2 className="text-black p-2 font-bold text-xl">Social media</h2>
          <div className="flex space-x-4 icons my-1 px-4 pt-4">
            {website ? (
              <a href={website} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe fa-2x" />
              </a>
            ) : null}

            {social
              ? Object.entries(social)
                  .filter(([_, value]) => value)
                  .map(([key, value]) => (
                    <a
                      key={key}
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className={`fab fa-${key} fa-2x transition duration-500 ease-in-out transform hover:scale-125`}
                      ></i>
                    </a>
                  ))
              : null}
          </div>
          <div className="">
            {bio && (
              <div>
                <h2 className="text-black p-2 font-bold text-xl ">
                  {name.trim().split(" ")[0]}'s Bio
                </h2>
                <p className="p-2">{bio}</p>
                <div className="line" />
              </div>
            )}
            <h2 className="text-black p-2 font-bold text-xl">Skill Set</h2>
            <div className="skills px-2">
              {skills.map((skill, index) => (
                <div key={index} className="p-1">
                  <i className="fas fa-check" /> {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
