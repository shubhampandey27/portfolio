import React from "react";

const LinkedInIcon = ({ href }: { href: string }) => {
  return (
    <a className="cursor-pointer" href={href} target="_blank">
      <svg
        className="hover:fill-SecondaryText fill-PrimaryText transition-all ease-in duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        fill="none"
        viewBox="0 0 20 21"
      >
        <path d="M16.875 2.37H3.125a1.25 1.25 0 0 0-1.25 1.25v13.75a1.25 1.25 0 0 0 1.25 1.25h13.75a1.25 1.25 0 0 0 1.25-1.25V3.62a1.25 1.25 0 0 0-1.25-1.25m0 15H3.125V3.62h13.75zM7.5 9.245v5a.625.625 0 1 1-1.25 0v-5a.625.625 0 1 1 1.25 0m6.875 2.188v2.812a.624.624 0 1 1-1.25 0v-2.812a1.563 1.563 0 0 0-3.125 0v2.812a.625.625 0 1 1-1.25 0v-5a.625.625 0 0 1 1.234-.14 2.812 2.812 0 0 1 4.391 2.327M7.813 7.057a.937.937 0 1 1-1.875 0 .937.937 0 0 1 1.875 0"></path>
      </svg>
    </a>
  );
};

export default LinkedInIcon;
