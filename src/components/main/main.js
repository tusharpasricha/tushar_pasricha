import About from "./about";
import Bar from "./bar";
import Footer from "./footer";
import Code from "./code";
import Skills from "./skills";
import { Socialbar2 } from "./socialbar2";
import { Object } from "./object";
import GitHubContributionsChart from "./githubcalender";
import NavBar from "./navbar";

function Main() {
  return (
    <>
      <NavBar />
      <Code />
      <About />
      <Bar />
      <Socialbar2 />
      <GitHubContributionsChart />
      <Object />
      <Skills />
      <Footer />
    </>
  );
}

export default Main;
