import React from "react";
import classes from "./about.module.css";

import { FaCaretDown } from "react-icons/fa";

import { useState } from "react";

const About = () => {
  const [mainintro, setmainintro] = useState("Hi,I am Tushar Pasricha");
  const [about, setabout] = useState("");
  function showabout() {
    setmainintro("Hi");
    setabout(
      "I am a Computer Science Undergrad at JIIT noida, currently in 3rd year."
    );
  }
  return (
    <div className={classes.main}>
      <div className={classes.mainintro}>{mainintro}</div>

      <button className={classes.aboutbtn} onClick={showabout}>
        {" "}
        <FaCaretDown />{" "}
      </button>

      <div className={classes.aboutdata}>{about}</div>
    </div>
  );
};

export default About;
