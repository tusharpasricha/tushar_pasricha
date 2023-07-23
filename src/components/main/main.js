import SocialBar from "./socialbar";
import About from "./about";
import Bar from "./bar";
import Footer from "./footer";
import Code from "./code";
import Skills from "./skills";
import { Socialbar2 } from "./socialbar2";
import { Object } from "./object";
import Framer from "./framer";
import GitHubContributionsChart from "./githubcalender";


function Main() {
  return (
    <>
    {/* <Framer/> */}
      <SocialBar />
      <Code/>
      
      <About />
      <Bar />
      <Socialbar2/>
      <GitHubContributionsChart/>
      <Object/>
      <Skills/>
      <Footer />
    </>
  );
}

export default Main;
