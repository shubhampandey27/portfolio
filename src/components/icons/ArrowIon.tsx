import React from "react";

const ArrowIon = ({ size, color }: { size?: number; color?: string }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size ? size : "12"}
        width={size ? size : "14"}
        fill="none"
        viewBox="0 0 12 14"
      >
        <path
          fill={color ? color : "#fff"}
          d="m6 2.71-.705.705 2.79 2.795H2v1h6.085l-2.79 2.795.705.705 4-4z"
        ></path>
      </svg>
    </div>
  );
};

export default ArrowIon;
