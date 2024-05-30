import React from "react";
import classes from "./post.module.css";
import Footer from "../main/footer";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Object } from "../main/object";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Post = () => {
  const location = useLocation();

  // Scroll to the top of the page whenever the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className={classes.postpage}>
      <div className={classes.back}>
        <Link className={classes.posta} to="/">
          <FaArrowLeft className={classes.faback} />
          Home
        </Link>
      </div>
      <div className={classes.post}>
        <a
          href="https://www.linkedin.com/pulse/5-valuable-lessons-i-learned-helping-my-father-his-tushar-pasricha/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={classes.card}>
            <div className={classes.maincontent}>
              <div className={classes.header}>
                <span>Article on</span>
                <span>6-April-2023</span>
              </div>
              <p className={classes.heading}>
                5 Valuable Lessons I Learned Helping My Father in His Business
              </p>
              <div className={classes.categories}>
                <span>Article</span>
                {/* <span>Css</span> */}
              </div>
            </div>
            <div className={classes.footer}>by Tushar Pasricha</div>
          </div>
        </a>
      </div>
      <Object />

      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default Post;
