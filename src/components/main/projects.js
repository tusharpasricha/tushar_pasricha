import React from "react";
import classes from "./projects.module.css";
import ss from "../../img/first.png";
import owlsome from "../../img/owlsome.png";
import elliptical from "../../img/elliptical.png";
import tabx from "../../img/tabx.png";
import dont from "../../img/dont.png";
import everypenny from "../../img/everypenny.jpeg";
import renttraker from "../../img/renttraker.png";
import freelancing from "../../img/freelancing.png";
import bitcoin from "../../img/bitcoin.png";
import charity from "../../img/charity.png";
import spendly from "../../img/spendly.png";
import localcanvas from "../../img/localcanvas.png";

const scrolldata = [
  {
    heading: "Spendly",
    img: spendly,
    link: "#",
    glink: "https://github.com/tusharpasricha/spendly", // Making a best guess, user can update
    desc: "AI-powered full-stack personal finance platform using React, Node.js, Express, and MongoDB. Features AI-driven bank statement import and real-time analytics.",
    categories: ["React", "Node.js", "MongoDB", "AI"],
  },
  {
    heading: "Local Canvas",
    img: localcanvas,
    link: "https://local-canvas-theta.vercel.app",
    glink: "https://github.com/tusharpasricha/local-canvas", // Making a best guess
    desc: "High-performance, local-first infinite whiteboard app using React 18, TypeScript, and HTML5 Canvas. Features hand-drawn aesthetic using Rough.js.",
    categories: ["React", "TypeScript", "Canvas", "Rough.js"],
  },
  {
    heading: "Freelancing website using Blockchain",
    img: freelancing,
    link: "https://freelancer-dapp-tusharpasricha.vercel.app/",
    glink: "https://github.com/tusharpasricha/freelancing-deals-dapp",
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
    link: "https://bitcoin-explorer-tusharpasricha.vercel.app/",
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
];

const Projects = () => {
  return (
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
                rel="noreferrer"
                className={classes.opt}
                href={data.link}
              >
                Demo
              </a>
              <a
                target="_blank"
                rel="noreferrer"
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
  );
};

export default Projects;
