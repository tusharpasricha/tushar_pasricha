import React from "react";
import classes from "./footer.module.css";
import { FaHeart } from "react-icons/fa";

const Fotter = () => {
  return (
    <div className={classes.footer}>
      Made with <FaHeart />
    </div>
  );
};

export default Fotter;
