import React from "react";
import classes from "./code.module.css";

const Code = () => {
  return (
    <div className={classes.outer}>
      <div className={classes.safari}>
        <div className={classes.nav}>
          <div className={classes.circle}>
            <div className={classes.circle1}></div>
            <div className={classes.circle2}></div>
            <div className={classes.circle3}></div>
          </div>
        </div>
        <div className={classes.text}>
          <div>
            <span className={classes.textblue}>const</span>{" "}
            <span className={classes.textpurple}>[</span> brain,
            <span className={classes.textyellow}> setbrain</span>{" "}
            <span className={classes.textpurple}>]</span> ={" "}
            <span className={classes.textblue}>React</span>.useState{" "}
            <span className={classes.textpurple}>(</span>{" "}
            <span className={classes.textorange}>
              'Think twice Code once'
            </span>
            <span className={classes.textpurple}>)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
