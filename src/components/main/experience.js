import React from "react";
import classes from "./experience.module.css";
import { FaBuilding, FaLaptopCode } from "react-icons/fa";

const Experience = () => {
    return (
        <div className={classes.experience} id="experience">
            <h1 className={classes.title}>E X P E R I E N C E</h1>
            
            <div className={classes.timeline}>
                <div className={classes.card}>
                    <div className={classes.iconBox}>
                        <FaBuilding />
                    </div>
                    <div className={classes.content}>
                        <h3>Ascent Risk and Resilience Software</h3>
                        <h4>Software Engineer</h4>
                        <span className={classes.date}>July 2024 - Present</span>
                        <p>
                            Developing scalable full-stack applications using React.js and .NET Core. 
                            Optimizing database queries and enhancing user interactions.
                        </p>
                    </div>
                </div>

                {/* Placeholder for future experience or education if needed */}
                <div className={classes.card}>
                    <div className={classes.iconBox}>
                        <FaLaptopCode />
                    </div>
                    <div className={classes.content}>
                        <h3>Freelance / Personal Projects</h3>
                        <h4>Full Stack Developer</h4>
                        <span className={classes.date}>2022 - 2024</span>
                        <p>
                            Built various web applications including spend trackers and portfolio sites 
                            using MERN stack and Next.js.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
