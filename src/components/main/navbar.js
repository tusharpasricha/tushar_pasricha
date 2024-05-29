import React from "react";
import classes from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={classes.bar}>
      <p>Tushar Pasricha</p>
      <button className={classes.bookmarkBtn}>
        <a
          href="https://drive.google.com/file/d/1e24urlPHitriSdAiqH8c9Qh09DOFMrtV/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className={classes.IconContainer}
        >
          <svg viewBox="0 0 384 512" height="0.9em" className={classes.icon}>
            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
          </svg>
        </a>
        <p className={classes.text}>Resume</p>
      </button>
    </div>
  );
};

export default NavBar;
