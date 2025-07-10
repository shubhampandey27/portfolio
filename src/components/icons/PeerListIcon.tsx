import React from "react";

const PeerListIcon = ({ href }: { href: string }) => {
  return (
    <a className="cursor-pointer" href={href} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="17"
        fill="none"
        viewBox="0 0 18 17"
        className="stroke-PrimaryText hover:stroke-SecondaryText duration-300"
      >
        <path
          // stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          d="M6.392.995h5.216a5 5 0 0 1 4.97 4.447l.175 1.58c.109.979.109 1.967 0 2.945l-.175 1.58a5 5 0 0 1-4.97 4.448H6.392a5 5 0 0 1-4.97-4.447l-.175-1.58a13.3 13.3 0 0 1 0-2.946l.175-1.58A5 5 0 0 1 6.392.995"
        ></path>
        <path
          // stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          d="M6.5 12.662V9.328m0 0v-5h3.333a2.5 2.5 0 1 1 0 5z"
        ></path>
      </svg>
    </a>
  );
};

export default PeerListIcon;
