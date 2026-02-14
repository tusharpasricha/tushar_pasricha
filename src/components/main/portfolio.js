import React from 'react';
import styles from './portfolio.module.css'; // Importing the CSS module
import tush4 from '../../img/tush4.jpeg'; // Your profile image
import resumePdf from '../../img/resume.pdf'; // Importing the resume file

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
          <h3>Software Engineer</h3>
          <p>
            I am a Software Engineer, specializing in building
            scalable, production-ready full-stack applications.
          </p>
          <p>
            My expertise includes Next.js, TypeScript, and Node.js/Express. I have experience designing
            multi-channel notification systems, implementing secure RBAC authentication, and architecting
            robust APIs. I am passionate about creating efficient, user-centric solutions.
          </p>
          <a
            href={resumePdf}
            download="Tushar_Pasricha_Resume.pdf"
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
