import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      {/* <h2>What’s our Jobseekers Said.</h2>
      <blockquote>
        “Search and find your dream job is now easier than ever. Just browse a job and apply if you need to.”
      </blockquote>
      <p>
        <strong>Mas Parjono</strong>
        <br />
        UI Designer at Google
      </p> */}
      <div className="testimonial-nav">
        <button>&larr;</button>
        <button>&rarr;</button>
      </div>
      <div className="cta-box">
        {/* <h3>Get your right job and right place apply now</h3>
        <p>Be among the first founders to experience the easiest way to start and run a business.</p> */}
      </div>
    </div>
  );
};

export default Testimonial;
