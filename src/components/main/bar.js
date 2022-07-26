import React from 'react'
import classes from './bar.module.css'
import { Link } from 'react-router-dom'
import {  FaLaptop, FaQuoteLeft} from 'react-icons/fa'

const Bar = () => {
  return (
    <div className={classes.bar}>
              <Link className={classes.barlink} activeClassName={classes.active}  to="/project" > <FaLaptop/> Projects</Link> 
              <Link  className={classes.barlink} activeClassName={classes.active}  to="/post"> <FaQuoteLeft/> Posts</Link> 
    </div>   

  )
}

export default Bar