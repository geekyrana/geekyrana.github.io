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
            Hello! My name is <strong>Bhanu Partap Singh</strong> and I'm from India. Through my 9+ years of experience in IT, I've traversed a dynamic path through diverse roles in project management, business analysis and software engineering, sculpting a profound work ethic, mastering the art of communication, and embracing adaptability as a cornerstone of my journey.
            </ScrollAnimation>

            <br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue my Bachelors of Technology in IT field. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
            Throughout my studies at college & internships, I had the opportunity to engage in fascinating projects. 
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
            As I transition towards higher echelons in my career as a seasoned Project Manager, I am actively broadening my expertise by delving into the realms of DevOps and iOS Development. My exploration into mobile app development commenced in 2015, initially as an experiment which has since evolved into a rich learning journey starting with Objective-C, followed by Swift, and presently engaged in mastering SwiftUI. Further, The prospect of embracing new challenges in DevOps, alongside its innovative practices and cutting-edge tools, ignites a profound sense of anticipation and eagerness within me. Just as Agile methodologies have been pivotal in my journey as a Project Manager, I am now fully committed to mastering the array of DevOps tools and techniques that promise to revolutionize project delivery and operational efficiency.
              <div className="tagline2">
              I am steadily building proficiency in various technologies, including:
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
