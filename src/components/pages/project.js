import React from 'react';
import classes from './project.module.css'
import Footer from '../main/footer';
import { Link } from 'react-router-dom';
import { FaArrowLeft} from 'react-icons/fa';
import ss from './first.png'
const scrolldata =[
  {
      heading:'Sir Johnson Socks',
      link:'https://www.sirjohnsonsocks.com/',
      desc:'Website for a socks brand made using Reactjs and hosted on versel',

  },
  {
      heading:'Noty',
      img:'',
      desc:'A notes App frdssgbfdgtrhtr',

  },
  {
    heading:'Every Penny Cost',
    img:'',
    desc:'React App for tracking expenses',
  },
  {
      heading:'Owlsome Coffee',
      img:'',
      desc:'Website for a coffee brand',

  },

  {
      heading:'Elliptical',
      img:'',
      desc:'A group project for my first hackathon',
  },
  {
    heading:'TabX',
    img:'',
    desc:'A chrome extention that makes sharing URL easier',
}
  
]

const Project = () => {
  return (
    <div className={classes.project}>
    <div className={classes.back}>
      <Link className={classes.projecta}  to="/">
      <FaArrowLeft className={classes.faback}/>     
      back  
       </Link>
    </div>

   
    
    <div className={classes.posts}>


    <div className={classes.scrollelement}>

      <div className={classes.img}>
          <img src={ss} alt="" />
      </div>

      <div className={classes.part2}>

        <h3>{ scrolldata[0].heading}</h3>
        <p>{scrolldata[0].desc}</p>

        <div className={classes.options}>
        <a className={classes.opt} href={scrolldata[0].link}> Demo </a>
        <a className={classes.opt} href={scrolldata[0].link}> Code</a>
        </div>
        
      </div>

    </div>

    <div className={classes.scrollelement}>
    <div className={classes.img}>
          <img src={ss} alt="" />
      </div>
      <div  className={classes.part2}>
       <h3>{ scrolldata[1].heading}</h3>
        <p>{scrolldata[1].desc}</p>
        <div className={classes.options}>
        <a className={classes.opt} href={scrolldata[0].link}> Demo </a>
        <a className={classes.opt} href={scrolldata[0].link}> Code</a>
        </div>
        </div>
    </div>

    <div className={classes.scrollelement}>
    <div className={classes.img}>
          <img src={ss} alt="" />
    </div>
    <div className={classes.part2}>
       <h3>{ scrolldata[2].heading}</h3>
        <p>{scrolldata[2].desc}</p>
        <div className={classes.options}>
        <a className={classes.opt} href={scrolldata[0].link}> Demo </a>
        <a className={classes.opt} href={scrolldata[0].link}> Code</a>
        </div>
        </div>
    </div>
    <div className={classes.scrollelement}>

     <div className={classes.img}>
          <img src={ss} alt="" />
      </div>

      <div className={classes.part2}>

       <h3>{ scrolldata[3].heading}</h3>
        <p>{scrolldata[3].desc}</p>
        <div className={classes.options}>
        <a className={classes.opt} href={scrolldata[0].link}> Demo </a>
        <a className={classes.opt} href={scrolldata[0].link}> Code</a>
        </div>



      </div>
    </div>


    <div className={classes.scrollelement}>

    <div className={classes.img}>
          <img src={ss} alt="" />
      </div>
      <div className={classes.part2}>
       <h3>{ scrolldata[4].heading}</h3>
        <p>{scrolldata[4].desc}</p>
        <div className={classes.options}>
        <a className={classes.opt} href={scrolldata[0].link}> Demo </a>
        <a className={classes.opt} href={scrolldata[0].link}> Code</a>
        </div>
        </div>
    </div>


    <div className={classes.scrollelement}>

    <div className={classes.img}>
          <img src={ss} alt="" />
    </div>

      <div className={classes.part2}> <h3>{ scrolldata[5].heading}</h3>
        <p>{scrolldata[5].desc}</p>
        <div className={classes.options}>
        <a className={classes.opt} href={scrolldata[0].link}> Demo </a>
        <a className={classes.opt} href={scrolldata[0].link}> Code</a>
        </div>
      </div>
    </div>
   
 
</div>


<Footer/>


</div>

  )
}

export default Project