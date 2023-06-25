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
import renttraker from './renttraker.png'
import freelancing from './freelancing.png'
import bitcoin from './bitcoin.png'
import charity from './charity.png'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrolldata = [
  {
    heading: "Freelancing website using Blockchain",
    img: freelancing,
    link: "https://github.com/tusharpasricha/Dapp-freelancing",
    glink: "https://github.com/tusharpasricha/Dapp-freelancing",
    desc: "Freelancing application used to create a contract between freelancer and employer increasing the trustability.",
    categories: ["Solidity", "Metamask", "React"],
  },
  {
    heading: "Rent Tracker",
    img: renttraker,
    link: "https://renttracker.vercel.app/",
    glink: "https://github.com/tusharpasricha/renttracker",
    desc: "Rent Tracking website where you can manage your rented property.",
    categories: ["React", "Firebase"],
  },
  {
    heading: "Bitcoin Explorer",
    img: bitcoin,
    link: "https://github.com/tusharpasricha/Bitcoin-Explorer",
    glink: "https://github.com/tusharpasricha/Bitcoin-Explorer",
    desc: "A bitcoin explorer with a feature where you can interact with like-minded bitcoiners",
    categories: ["React"],
  },
  {
    heading: "Charity Dapp",
    img: charity,
    link: "https://github.com/tusharpasricha/Dapp-charity",
    glink: "https://github.com/tusharpasricha/Dapp-charity",
    desc: "Decentralized application to restore trust in charity and make sure the charity reach direct to the intended recipients through Smart Contract using Solidity.",
    categories: ["Solidity", "Metamask", "React"],
  },
  {
    heading: "Sir Johnson Socks",
    img: ss,
    link: "https://www.sirjohnsonsocks.com/",
    glink: "https://github.com/tusharpasricha/sirjohnsonsocks",
    desc: "Website for a socks brand made using Reactjs and hosted on Versel",
    categories: ["React"],
  },
  
  
]

const allprojects = [
  {
    heading: "Freelancing website using Blockchain",
    img: freelancing,
    link: "https://github.com/tusharpasricha/Dapp-freelancing",
    glink: "https://github.com/tusharpasricha/Dapp-freelancing",
    desc: "Freelancing application used to create a contract between freelancer and employer increasing the trustability. ",
  },
  {
    heading: "Rent Tracker",
    img: renttraker,
    link: "https://renttracker.vercel.app/",
    glink: "https://github.com/tusharpasricha/renttracker",
    desc: "Rent Tracking website where you can manage your rented property.",
  },
  {
    heading: "Bitcoin Explorer",
    img: bitcoin,
    link: "https://github.com/tusharpasricha/Bitcoin-Explorer",
    glink: "https://github.com/tusharpasricha/Bitcoin-Explorer",
    desc: "A bitcoin explorer with a feature where you can interact with like minded bitcoiners",
  },
  {
    heading: "Charity Dapp",
    img: charity,
    link: "https://github.com/tusharpasricha/Dapp-charity",
    glink: "https://github.com/tusharpasricha/Dapp-charity",
    desc: "Decentralized application to restore trust in charity and make sure the charity reach direct to the intended recipients through Smart Contract using Solidity.",
  },
  {
    heading: "Sir Johnson Socks",
    img: ss,
    link: "https://www.sirjohnsonsocks.com/",
    glink: "https://github.com/tusharpasricha/sirjohnsonsocks",
    desc: "Website for a socks brand made using Reactjs and hosted on versel",
  },
  {
    heading: "TabX",
    img: tabx,
    link: "https://github.com/tusharpasricha/tabX",
    glink: "https://github.com/tusharpasricha/tabX",
    desc: "Extension to share URL of your current tab straight away with a click. Its a group project for my first Hackathon",
  },

  {
    heading: "Don't Stop",
    img: dont,
    link: "https://dontstop-xi.vercel.app/",
    glink: "https://github.com/tusharpasricha/Don-tStop",
    desc: "A travel journal app to write your everyday travel journal",
  },
  {
    heading: "Every Penny Cost",
    img: everypenny,
    link: "https://everypennycounts.vercel.app/",
    glink: "https://github.com/tusharpasricha/everypennycounts",
    desc: "React App for tracking expenses",
  },
  {
    heading: "Owlsome Coffee",
    img: owlsome,
    link: "",
    glink: "https://github.com/tusharpasricha/owlsomecoffee",
    desc: "Website for a coffee brand",
  },

  {
    heading: "Elliptical",
    img: elliptical,
    link: "https://elliptical.herokuapp.com/html/home.html",
    glink: "https://github.com/sarthakkathpalia/elliptical",
    desc: "A group project for my first hackathon",
  },
  {
    heading: "TabX",
    img: tabx,
    link: "https://github.com/tusharpasricha/tabX",
    glink: "https://github.com/tusharpasricha/tabX",
    desc: "Extension to share URL of your current tab straight away with a click. Its a group project for my first Hackathon",
  },
];

const Project = () => {
  const location = useLocation();

  // Scroll to the top of the page whenever the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={classes.projectpage}>
      <div className={classes.back}>
        <Link className={classes.projecta} to="/">
          <FaArrowLeft className={classes.faback} />
          Back
        </Link>
      </div>

      <div className={classes.project}>
        {scrolldata.map((data, index) => (
          <div className={classes.scrollelement} key={index}>
            <div className={classes.img}>
              <img src={data.img} alt="" />
            </div>
            <div className={classes.part2}>
              <div className={classes.data}>
                <h3>{data.heading}</h3>
                <p>{data.desc}</p>
                <div className={classes.categories}>
                  {data.categories.map((category, categoryIndex) => (
                    <span key={categoryIndex}>{category}</span>
                  ))}
                </div>
              </div>
              <div className={classes.options}>
                <a
                  target="_blank"
                  className={classes.opt}
                  href={data.link}
                >
                  Demo
                </a>
                <a
                  target="_blank"
                  className={classes.opt}
                  href={data.glink}
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Project;

