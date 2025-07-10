import React from "react";

const FigmaIcon = ({ href }: { href: string }) => {
  return (
    <a className="cursor-pointer" href={href} target="_blank">
      <svg
        className="stroke-PrimaryText hover:stroke-SecondaryText duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        fill="none"
        viewBox="0 0 20 21"
      >
        <path
          // stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          d="M12.5 12.995a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M10 12.995v2.5a2.5 2.5 0 1 1-2.5-2.5m2.5 0H7.5m2.5 0v-5m-2.5 5a2.5 2.5 0 0 1 0-5m2.5 0H7.5m2.5 0v-5m0 5h2.5a2.5 2.5 0 0 0 0-5H10m-2.5 5a2.5 2.5 0 1 1 0-5H10"
        ></path>
      </svg>
    </a>
  );
};

export default FigmaIcon;
