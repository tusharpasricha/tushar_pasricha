import React from "react";
import classes from "./bar.module.css";
import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <div className={classes.bar}>
      <Link className={classes.barlink} to="/project">
        <div className={classes.card}>
          <div className={classes.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              width="24px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-folder"
            >
              <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"></path>
            </svg>
          </div>
          <p className={classes.text}>Projects</p>
        </div>
      </Link>
      <Link className={classes.barlink} to="/post">
        <div className={classes.card}>
          <div className={classes.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              width="24px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-file-text"
            >
              <path d="M14 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-4-4z"></path>
              <line x1="14" y1="2" x2="14" y2="10"></line>
              <line x1="4" y1="10" x2="20" y2="10"></line>
              <line x1="4" y1="14" x2="20" y2="14"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
          <p className={classes.text}>Posts</p>
        </div>
      </Link>
    </div>
  );
};

export default Bar;
