import React from "react";
import classes from "./code.module.css";

const Code = () => {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.safari}>
          <div className={classes.nav}>
            <div className={classes.circle}>
              <div class={classes.circle1}></div>
              <div class={classes.circle2}></div>
              <div class={classes.circle3}></div>
            </div>
          </div>
          <div className={classes.text}>
            <div>
              <text className={classes.textblue}>const</text>{" "}
              <text className={classes.textpurple}>[</text> brain,
              <text className={classes.textyellow}>setbrain</text>{" "}
              <text className={classes.textpurple}>]</text>={" "}
              <text className={classes.textblue}>React</text>.useState{" "}
              <text className={classes.textpurple}>(</text>{" "}
              <text className={classes.textorange}>
                'Think twice Code once'
              </text>
              <text className={classes.textpurple}>)</text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Code;
