import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./githubcalender.css";
const GitHubContributionsChart = () => {
  return (
    <div className="calendar">
      <a
        href="https://github.com/tusharpasricha"
        rel="noreferrer"
        target="_blank"
      >
        <div className="cal">
          <h2>GitHub</h2>
          <GitHubCalendar
            colorScheme="dark"
            username="tusharpasricha"
            color="green" // You can choose from 'green', 'blue', or 'pink'
          />
        </div>
      </a>
    </div>
  );
};

export default GitHubContributionsChart;
