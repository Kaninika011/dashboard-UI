import React from 'react';
import { AiFillTwitterCircle,  AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";

const Socials = () => {
  return (
    <div className="socials__wrapper">
      <ul className="socials__links">
        <li>
          <a href="https://github.com/" target="blank" className="social__link">
          <AiOutlineGithub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            target="blank"
            className="social__link"
          >
           <AiFillTwitterCircle/>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/"
            target="blank"
            className="social__link"
          >
            <AiFillLinkedin/>
          </a>
        </li>
        <li>
          <a
            href="https://discord.com/"
            target="blank"
            className="social__link"
          >
         <IoLogoDiscord/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;