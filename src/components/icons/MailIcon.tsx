import React from "react";

const MailIcon = ({ href }: { href: string }) => {
  return (
    <a className="cursor-pointer" href={`mailto:${href}`} target="_blank">
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
          strokeWidth="1.25"
          d="M14.318 3.412h-8.75a3.333 3.333 0 0 0-3.333 3.333v7.5a3.333 3.333 0 0 0 3.333 3.333h8.75a3.333 3.333 0 0 0 3.334-3.333v-7.5a3.333 3.333 0 0 0-3.334-3.333Z"
        ></path>
        <path
          // stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          d="m2.274 6.82 6.004 3.442a3.3 3.3 0 0 0 3.313 0l6.02-3.442"
        ></path>
      </svg>
    </a>
  );
};

export default MailIcon;
