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
            username="tusharpasricha"
            theme={{
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
          />
        </div>
      </a>
    </div>
  );
};

export default GitHubContributionsChart;
