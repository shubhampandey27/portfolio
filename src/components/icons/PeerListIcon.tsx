import React from "react";

const PeerListIcon = ({ href }: { href: string }) => {
  return (
    <a className="cursor-pointer" href={href} target="_blank">
      <svg
        className="fill-PrimaryText hover:fill-SecondaryText duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        fill="none"
        viewBox="0 0 20 21"
      >
        <path
          // fill="#000"
          d="M12.5 6.745a.625.625 0 0 1 .625-.625h5a.625.625 0 1 1 0 1.25h-5a.625.625 0 0 1-.625-.625m-1.875 6.094a3.28 3.28 0 0 1-3.281 3.281H2.5a.625.625 0 0 1-.625-.625v-10A.625.625 0 0 1 2.5 4.87h4.531a2.969 2.969 0 0 1 2.004 5.156 3.28 3.28 0 0 1 1.59 2.813m-7.5-3.282h3.906a1.719 1.719 0 0 0 0-3.437H3.125zm6.25 3.282a2.03 2.03 0 0 0-2.031-2.032H3.125v4.063h4.219a2.03 2.03 0 0 0 2.031-2.031m10-.469a.624.624 0 0 1-.625.625h-5.547a2.5 2.5 0 0 0 4.421.875.626.626 0 1 1 1 .75 3.75 3.75 0 1 1 .751-2.25m-1.328-.625a2.5 2.5 0 0 0-4.844 0z"
        ></path>
      </svg>
    </a>
  );
};

export default PeerListIcon;
