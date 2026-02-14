import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiFirebase,
} from "react-icons/si";
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
          <SiTypescript className={classes.skillsIcon} />
          TypeScript
        </div>
        <div className={classes.eachSkill}>
          <SiCplusplus className={classes.skillsIcon} />
          C++
        </div>
        <div className={classes.eachSkill}>
          <FaReact className={classes.skillsIcon} />
          React
        </div>
        <div className={classes.eachSkill}>
          <SiNextdotjs className={classes.skillsIcon} />
          Next.js
        </div>
        <div className={classes.eachSkill}>
          <SiTailwindcss className={classes.skillsIcon} />
          Tailwind CSS
        </div>
        <div className={classes.eachSkill}>
          <FaNodeJs className={classes.skillsIcon} />
          Node.js
        </div>
        <div className={classes.eachSkill}>
          <SiMongodb className={classes.skillsIcon} />
          MongoDB
        </div>
        <div className={classes.eachSkill}>
          <SiMysql className={classes.skillsIcon} />
          SQL
        </div>
        <div className={classes.eachSkill}>
          <SiFirebase className={classes.skillsIcon} />
          Firebase
        </div>
        <div className={classes.eachSkill}>
          <FaDocker className={classes.skillsIcon} />
          Docker
        </div>
      </div>
    </div>
  );
};

export default Skills;
