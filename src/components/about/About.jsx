import React, { useEffect } from "react";
import { aboutData } from "./AboutData";
import "./About.css";

export default function About() {
  console.log(aboutData);
  return (
    <div>
      <div id="AboutMe">
        <div id="About_start">
          <h1>
            <span>{aboutData[0].abouttext}</span>{" "}
            <span>{aboutData[0].aboutme}</span>
          </h1>
          <div id="border"></div>
        </div>
        <div id="aboutMe">
          <div id="aboutKing">
            <div id="MeImg">
            <img src={aboutData[1].meImg} alt="" />
            </div>
            {/* <div id="body">
              <div class="gallery">
                <img src={aboutData[3].img1} alt="" />
                <img src={aboutData[3].img2} alt="" />
                <img src={aboutData[3].img3} alt="" />
                <img src={aboutData[3].img4} alt="" />
                <img src={aboutData[3].img5} alt="" />
              </div>
            </div> */}
            <div id="AboutMeText">
              <h1>
                {aboutData[2].frontend} <br /> {aboutData[2].name}
              </h1>
              <p id="p">{aboutData[2].p}</p>
              <p id="p2">{aboutData[2].p2}</p>
              <button>{aboutData[2].button}</button>
            </div>
            <div id="te"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
