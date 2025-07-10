import React from "react";

const MenuIcon = ({ size }: { size: number }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        color="#000"
        height={size}
        width={size}
        display="inline-block"
        viewBox="0 0 256 256"
      >
        <path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></path>
      </svg>
    </div>
  );
};

export default MenuIcon;
