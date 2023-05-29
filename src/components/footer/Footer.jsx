import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../../components/contentWrapper/Contentwrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Experience limitless entertainment with the movix app. Stream your
          favorite movies, TV shows, and documentaries anytime, anywhere. Dive
          into a world of captivating stories, immersive visuals, and incredible
          performances, all at your fingertips. Discover a vast library of
          content across genres, including thrilling series, heartwarming
          dramas, mind-bending sci-fi, and much more. With personalized
          recommendations tailored to your taste, the movix app ensures you
          never miss a moment of excitement
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
