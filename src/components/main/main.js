import Bar from "./bar";
import Footer from "./footer";
import Code from "./code";
import Skills from "./skills";
import GitHubContributionsChart from "./githubcalender";
import Portfolio from "./portfolio";

function Main() {
  return (
    <>
      <Portfolio />
      <Bar />
      <Skills />
      {/* <Code /> */}
      {/* <GitHubContributionsChart /> */}
      <Footer />
    </>
  );
}

export default Main;
