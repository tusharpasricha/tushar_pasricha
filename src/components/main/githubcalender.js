import React from "react";
import GitHubCalendar from "react-github-calendar";
import './githubcalender.css'
const GitHubContributionsChart = () => {
  return (
    <div className="calendar">
      <h2>GitHub</h2>
      <GitHubCalendar
        username="tusharpasricha"
        color="green" // You can choose from 'green', 'blue', or 'pink'
      />
    </div>
  );
};

export default GitHubContributionsChart;
