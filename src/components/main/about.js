import React from "react";
import classes from "./about.module.css";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";
import { FaCaretUp } from "react-icons/fa";
import tush from "../../img/tush2.png";

import { useState } from "react";

const About = () => {
  const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`};
  `;

  const [mainintro, setmainintro] = useState("Hi,I am Tushar Pasricha");
  const [c, setc] = useState(0);
  const [bool, setbool] = useState(0);

  function showabout() {
    if (mainintro === "Hi") {
      setc(0);
      setmainintro("Hi,I am Tushar Pasricha");
      setbool(0);
    } else {
      setc(1);
      setmainintro("Hi");
      setbool(1);
    }
  }
  return (
    <div className={classes.main}>
      <div className={classes.mainintro}>
        <Bounce>{mainintro}</Bounce>
      </div>

      <button className={classes.aboutbtn} onClick={showabout}>
        {c === 0 && (
          <button className={classes.button}>
            <span className={classes.span}>About me</span>
            <span className={classes.span}>Hello!</span>
          </button>
        )}
        {c === 1 && <FaCaretUp size={85} style={{ cursor: "pointer" }} />}
      </button>

      <div className={classes.aboutdata}>
        {bool ? (
          <div className={classes.aboutcard}>
            <div className={classes.card}>
              <div className={classes.cardcontent}>
                <div className={classes.cardtop}>
                  <span className={classes.cardtitle}>About me</span>

                  <img
                    alt="img"
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                    }}
                    height
                    src={tush}
                  />
                </div>
                <div className={classes.cardbottom}>
                  <p>
                    <br></br>
                    Final year Computer Science Undergrad at Jaypee Institute of
                    Information Technology Noida, India.
                    <br></br>
                    <br></br>I am into Web development and am also a Blockchain
                    enthusiast.
                  </p>

                  <svg
                    width="32"
                    viewBox="0 -960 960 960"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path>
                  </svg>
                </div>
              </div>
              <div className={classes.cardimage}></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default About;
