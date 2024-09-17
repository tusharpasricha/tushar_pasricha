import React from 'react';
import styles from './portfolio.module.css'; // Importing the CSS module
import tush4 from '../../img/tush4.jpeg'; // Your profile image

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioContent}>
        <div className={styles.imageContent}>
          <img
            src={tush4}
            alt="Tushar Pasricha"
            className={styles.profileImage}
          />
          <div className={styles.socialMedia}>
            <a
              href="https://linkedin.com/in/tusharpasricha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/tusharpasricha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/tusharpasricha_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            {/* Add other social media links with icons as needed */}
          </div>
        </div>

        <div className={styles.textContent}>
          <h1>Tushar Pasricha</h1>
          <p>
            I’m a recent B.Tech graduate in Computer Science and Engineering with a passion for solving
            problems and learning something new every day. My focus is on understanding the core principles behind
            technology and finding practical ways to apply them.
          </p>
          <p>
            I believe in approaching every project with curiosity and a willingness to grow, knowing there’s always more
            to learn. Whether in development or life, I’m committed to staying adaptable and open to new challenges.
          </p>
          <a
            href="https://drive.google.com/file/d/1vkInHRCuuAFM2XEWkB2dUQZL7NGZ6MPq/view" // Link to the local resume image
            download="Tushar_Pasricha_Resume" // Suggested name for downloaded file
            className={styles.resumeButton}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
