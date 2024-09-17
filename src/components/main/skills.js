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

const Skills = () => {
  return (
    <div className={classes.skills}>
      {/* <div className={classes.head}>Skills</div> */}
      <div className={classes.allSkills}>
        <div className={classes.eachSkill}>
          <FaHtml5 className={classes.skillsIcon} />
          HTML
        </div>
        <div className={classes.eachSkill}>
          <FaCss3 className={classes.skillsIcon} />
          CSS
        </div>
        <div className={classes.eachSkill}>
          <FaJs className={classes.skillsIcon} />
          JavaScript
        </div>
        <div className={classes.eachSkill}>
          <FaReact className={classes.skillsIcon} />
          React
        </div>
        <div className={classes.eachSkill}>
          <FaNodeJs className={classes.skillsIcon} />
          Node.js
        </div>
        <div className={classes.eachSkill}>
          <FaFireAlt className={classes.skillsIcon} />
          Firebase
        </div>
      </div>
    </div>
  );
};

export default Skills;
