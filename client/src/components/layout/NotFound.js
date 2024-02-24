import React from "react";

const NotFound = () => {
  return (
    <section className="text-5xl font-bold flex flex-col justify-center m-20 space-y-10">
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle " /> Page Not Found
      </h1>
      <p className="large">Sorry, this page does not exist</p>
    </section>
  );
};

export default NotFound;
