import React from "react";
import classes from "./project.module.css";
import Footer from "../main/footer";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ss from "./first.png";
import owlsome from "./owlsome.png"
import elliptical from "./elliptical.png"
import tabx from "./tabx.png"
import dont from "./dont.png"
import everypenny from './everypenny.jpeg'
const scrolldata = [
  {
    heading: "Sir Johnson Socks",
    img:{ss},
    link: "https://www.sirjohnsonsocks.com/",
    glink:"https://github.com/tusharpasricha/sirjohnsonsocks",
    desc: "Website for a socks brand made using Reactjs and hosted on versel",
  },
  {
    heading: "Don't Stop",
    img: dont,
    link:"https://dontstop-xi.vercel.app/",
    glink:"https://github.com/tusharpasricha/Don-tStop",
    desc: "A travel journal app to write your everyday travel journal",
  },
  {
    heading: "Every Penny Cost",
    img: everypenny,
    link:"https://everypennycounts.vercel.app/",
    glink:"https://github.com/tusharpasricha/everypennycounts",
    desc: "React App for tracking expenses",
  },
  {
    heading: "Owlsome Coffee",
    img: owlsome,
    link:"",
    glink:"https://github.com/tusharpasricha/owlsomecoffee",
    desc: "Website for a coffee brand",
  },

  {
    heading: "Elliptical",
    img: elliptical,
    link:"https://elliptical.herokuapp.com/html/home.html",
    glink:"https://github.com/sarthakkathpalia/elliptical",
    desc: "A group project for my first hackathon",
  },
  {
    heading: "TabX",
    img: tabx,
    link:"https://github.com/tusharpasricha/tabX",
    glink:"https://github.com/tusharpasricha/tabX",
    desc: "A chrome extention that makes sharing URL easier",
  },
];

const Project = () => {
  return (
    <div className={classes.projectpage}>
      <div className={classes.back}>
        <Link className={classes.projecta} to="/">
          <FaArrowLeft className={classes.faback} />
          Back
        </Link>
      </div>

      <div className={classes.project}>
        <div className={classes.scrollelement}>
          <div className={classes.img}>
            <img src={ss} alt="" />
          </div>

          <div className={classes.part2}>
            <div className={classes.data}>
              <h3>{scrolldata[0].heading}</h3>
              <p>{scrolldata[0].desc}</p>
            </div>

            <div className={classes.options}>
              <a
                target="_blank"
                className={classes.opt}
                href={scrolldata[0].link}
              >
                {" "}
                Demo{" "}
              </a>
              <a target="_blank" className={classes.opt} href={scrolldata[0].glink}>
                {" "}
                Code
              </a>
            </div>
          </div>
        </div>

        <div className={classes.scrollelement}>
          <div className={classes.img}>
            <img src={scrolldata[1].img} alt="" />
          </div>
          <div className={classes.part2}>
            <div className={classes.data}>
              <h3>{scrolldata[1].heading}</h3>
              <p>{scrolldata[1].desc}</p>
            </div>
            <div className={classes.options}>
              <a className={classes.opt} href={scrolldata[1].link}>
                {" "}
                Demo{" "}
              </a>
              <a className={classes.opt} href={scrolldata[1].link}>
                {" "}
                Code
              </a>
            </div>
          </div>
        </div>

        <div className={classes.scrollelement}>
          <div className={classes.img}>
            <img src={scrolldata[2].img} alt="" />
          </div>
          <div className={classes.part2}>
            <div className={classes.data}>
              <h3>{scrolldata[2].heading}</h3>
              <p>{scrolldata[2].desc}</p>
            </div>
            <div className={classes.options}>
              <a target="_blank"className={classes.opt} href={scrolldata[2].link}>
                {" "}
                Demo{" "}
              </a>
              <a target="_blank" className={classes.opt} href={scrolldata[2].glink}>
                {" "}
                Code
              </a>
            </div>
          </div>
        </div>
        <div className={classes.scrollelement}>
          <div className={classes.img}>
            <img src={scrolldata[3].img} alt="" />
          </div>

          <div className={classes.part2}>
            <div className={classes.data}>
              <h3>{scrolldata[3].heading}</h3>
              <p>{scrolldata[3].desc}</p>
            </div>
            <div className={classes.options}>
              <a target="_blank"className={classes.opt} href={scrolldata[0].link}>
                {" "}
                Demo{" "}
              </a>
              <a target="_blank"className={classes.opt} href={scrolldata[3].glink}>
                {" "}
                Code
              </a>
            </div>
          </div>
        </div>

        <div className={classes.scrollelement}>
          <div className={classes.img}>
            <img src={scrolldata[4].img} alt="" />
          </div>
          <div className={classes.part2}>
            <div className={classes.data}>
              <h3>{scrolldata[4].heading}</h3>
              <p>{scrolldata[4].desc}</p>
            </div>
            <div className={classes.options}>
              <a target="_blank"className={classes.opt} href={scrolldata[4].link}>
                {" "}
                Demo{" "}
              </a>
              <a target="_blank"className={classes.opt} href={scrolldata[4].glink}>
                {" "}
                Code
              </a>
            </div>
          </div>
        </div>

        <div className={classes.scrollelement}>
          <div className={classes.img}>
            <img src={scrolldata[5].img} alt="" />
          </div>

          <div className={classes.part2}>
            <div className={classes.data}>
              <h3>{scrolldata[5].heading}</h3>
              <p>{scrolldata[5].desc}</p>
            </div>
            <div className={classes.options}>
              <a target="_blank"className={classes.opt} href={scrolldata[5].link}>
                {" "}
                Demo{" "}
              </a>
              <a target="_blank"className={classes.opt} href={scrolldata[5].link}>
                {" "}
                Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Project;
