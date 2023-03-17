import React, { FunctionComponent } from "react";
import "./spin.module.scss";

export const SpinIcon: FunctionComponent = () => {
  return (
    <svg>
      <g>
        <path d="M 50,100 A 1,1 0 0 1 50,0" />
      </g>
      <g>
        <path d="M 50,75 A 1,1 0 0 0 50,-25" />
      </g>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "rgb(23, 230, 78)", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(191, 247, 124)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
