import React from 'react'
import classes from './socialbar.module.css'
import {  FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialBar = () => {
  return (
    <div className={classes.socialhandles}>
       
    <a className={classes.sociala} href='https://github.com/tusharpasricha' target="_blank">  <FaGithub/> Github</a>

    <a className={classes.sociala}  href="https://www.linkedin.com/in/tusharpasricha" target="_blank"> <FaLinkedin/> LinkedIn</a>

    <a className={classes.sociala}  href="https://twitter.com/tusharpasricha_" target="_blank"> <FaTwitter/> Twitter</a>
</div>

  )
}

export default SocialBar