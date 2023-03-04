import React from "react";
import { Link } from "react-router-dom";

const img =
  "https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <img src={img} alt="error" />
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
