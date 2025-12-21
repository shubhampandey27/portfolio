import React from "react";
import LinkedInIcon from "./icons/LinkedInIcon";
import PeerListIcon from "./icons/PeerListIcon";
import FigmaIcon from "./icons/FigmaIcon";
import MailIcon from "./icons/MailIcon";

const Footer = () => {
  return (
    <footer>
      <div className="box">
        <div className="flex items-center flex-col lg:flex-row justify-between mb-[50px]">
          <p className="text-sm font-normal leading-[28px]">
            Designed and built by Shubham Pandey
          </p>
          <div className="flex items-center gap-[13px] ">
            <LinkedInIcon href={" https://www.linkedin.com/in/shubhfolio/"} />
            <PeerListIcon href={"https://www.behance.net/shubhfolio"} />
            <FigmaIcon href={"https://www.figma.com/@shubhampandey"} />
            <MailIcon href={"shubhfolio@gmail.com"} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
