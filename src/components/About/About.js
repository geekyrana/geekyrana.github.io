import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/BhanuMemoji.png"
            alt="BhanuMemoji"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Bhanu Partap Singh</strong> and I'm from India. Through my 9+ years of expereince in IT, I've traversed a dynamic path through diverse roles in project management & business analysis, sculpting a profound work ethic, mastering the art of communication, and embracing adaptability as a cornerstone of my journey.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue my Bachelors of Technology in IT field. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
            Throughout my studies at college & internships, I had the opportunity to engage in fascinating projects. 
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            While I am currently amidst a career transition, progressing from an accomplished Project Manager to a dedicated iOS Developer, my journey into the realm of mobile app development commenced in 2015. It all began with an experiment that yielded a wealth of insights into the world of app creation. Subsequently, I embarked on a path of iOS development, starting with Objective-C, followed by Swift, and presently immersing myself in SwiftUI. The prospect of venturing into upcoming ventures brimming with innovation excites me, especially in the domains of iOS development and cross-platform mobile excellence.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
