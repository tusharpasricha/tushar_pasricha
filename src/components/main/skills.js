import React from "react";
import {
  FaCss3,
  FaFireAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import classes from "./skills.module.css";

const skills = () => {
  return (
    <div className={classes.skills}>
      <div className={classes.head}></div>
      <div className={classes.allskils}>
        <div className={classes.eachskill}>
          <FaHtml5 className={classes.skillsfa} />
          HTML
        </div>
        <div className={classes.eachskill}>
          <FaCss3 className={classes.skillsfa} />
          Css
        </div>
        <div className={classes.eachskill}>
          <FaJs className={classes.skillsfa} />
          Javascript
        </div>
        <div className={classes.eachskill}>
          <FaReact className={classes.skillsfa} />
          Reactjs
        </div>

        <div className={classes.eachskill}>
          <FaNodeJs className={classes.skillsfa} />
          Nodejs
        </div>
        <div className={classes.eachskill}>
          <FaFireAlt className={classes.skillsfa} />
          Firebase
        </div>
      </div>
    </div>
  );
};

export default skills;
