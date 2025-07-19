import React from "react";

const CloseIcon = ({ size }: { size: number }) => {
  return (
    <div>
      <svg
        className="hover:fill-SecondaryText fill-PrimaryText transition-all ease-in duration-300 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        display="inline-block"
        height={size}
        width={size}
        viewBox="0 0 256 256"
      >
        <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"></path>
      </svg>
    </div>
  );
};

export default CloseIcon;
