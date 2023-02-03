import React from "react";
import classes from "./about.module.css";
import {bounce} from 'react-animations'
import styled,{keyframes} from 'styled-components'

import { FaCaretDown , FaCaretUp} from "react-icons/fa";

import { useState } from "react";

const About = () => {
  const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} `;

  const [mainintro, setmainintro] = useState("Hi,I am Tushar Pasricha");
  const [about, setabout] = useState("");
  const [c,setc]=useState(0);
  
  function showabout() {
    if(mainintro==="Hi")
    {
      setc(0);
      setmainintro("Hi,I am Tushar Pasricha")
      setabout("");
      
    }
    else{
      setc(1);
      setmainintro("Hi");
      setabout(
        "I am a pre final year Computer Science Undergrad at Jaypee Institute of Information Technology Noida, India. I am a Blockchain enthusiast and am also into Web development. "
      );
    }
   
  }
  return (
    <div className={classes.main}>
      <div className={classes.mainintro}><Bounce>{mainintro}</Bounce></div>

      <button className={classes.aboutbtn} onClick={showabout}>
        {c===0 &&<FaCaretDown />}
        {c===1&& <FaCaretUp />}

        
        
        
        
      </button>

      <div className={classes.aboutdata}>{about}</div>
    </div>
  );
};

export default About;
