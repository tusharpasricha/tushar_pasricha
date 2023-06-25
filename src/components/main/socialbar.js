import React from 'react'
import classes from './socialbar.module.css'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialBar = () => {
  return (
    <div className={classes.socialhandles}>
      <h1>Hello</h1>

      {/* <a className={classes.sociala} href='https://github.com/tusharpasricha' target="_blank">  <FaGithub /> Github</a>

      <a className={classes.sociala} href="https://www.linkedin.com/in/tusharpasricha" target="_blank"> <FaLinkedin /> LinkedIn</a>

      <a className={classes.sociala} href="https://twitter.com/tusharpasricha_" target="_blank"> <FaTwitter /> Twitter</a> */}
      <button className={classes.bookmarkBtn}>
        <a href="https://drive.google.com/file/d/1e24urlPHitriSdAiqH8c9Qh09DOFMrtV/view?usp=sharing" target="_blank" className={classes.IconContainer}>
          <svg viewBox="0 0 384 512" height="0.9em" className={classes.icon}><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path></svg>
        </a>
        <p className={classes.text}>Resume</p>
      </button>
    </div>

  )
}

export default SocialBar