import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../imgs/1.jpg";
import "./navbar.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

const data = [
  {
    id: 1,
    hi: "Salom, bu menman",
    md: "Sharipov Sodiqjon",
    and: "Men",
    frontend: "Frontend Dasturchimazn",
    p: "Dizayn: Veb-saytlarni kreativ dizaynlarni yaratish va ulardagi foydalanuvchi interfeysini optimallashtirish. Kodlash: HTML, CSS, va Bootstrap, Tailwind Css, va JavaScript, React. tilidan foydalanib, veb-saytlarni yaratish va ularga interaktiv funksiyalar qo'shishni bilaman.",
    instagram: require("../imgs/3.png"),
    facebook: require("../imgs/4.png"),
    github: require("../imgs/5.png"),
    button: "CV yuklab olish",
  },
  {
    id: 2,
    network: require("../imgs/2.png"),
  },
];

export default function Navbar() {


  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <div className="logo_img">
            <img src={img1} alt="" />
          </div>
          <div className="logo_text">
            <h1>Sodiqjon</h1>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="navbar_home">
          <ul>
            <li>
              <Link to="/home">
                <a href=""> Home</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a href=""> About me</a>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <a href=""> Services</a>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <a href=""> Skills</a>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <a href=""> Portfolio</a>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <a href=""> Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/button">
          <button>meni ishga oling</button>
        </Link>
      </div>
      <div id="home">
      <div id="home_about">
       <div id="text">
       <p>{data[0].hi}</p>
       <h1>{data[0].md}</h1>
       <h2>{data[0].and} <span>{data[0].frontend}</span></h2>
       <p>{data[0].p}</p>
       <div id="social_network">
       <div id="network_imgs">
    <a href="https://instagram.com/sodikjon_0007?igshid=MzMyNGUyNmU2YQ==">
    <img src={data[0].instagram} alt="Noutbuk rasmi" />
    </a>
       </div>
       <div id="network_imgs">
    <a href="https://www.facebook.com/profile.php?id=61553024955660&mibextid=ZbWKwL">
    <img src={data[0].facebook} alt="Noutbuk rasmi" />
    </a>
       </div>
       <div id="network_imgs">
    <a href="https://github.com/Sodiqjon09">
    <img src={data[0].github} alt="Noutbuk rasmi" /></a>
       </div>
       <div id="network_imgs">
    <a href="https://t.me/SharipovSodiqjon700">
       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
       </a>
       </div>
       </div>
       <button>{data[0].button}</button>
     </div>
     <div id="compyuter">
       <img src={data[1].network} alt="Noutbuk rasmi" />
     </div>
     </div>
      </div>
    </div>
  );
}
