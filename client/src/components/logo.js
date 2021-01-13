import * as React from "react";

const Logo = ({ width = "200", height = "46" }) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 249.29 46`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Delta+</title>
      <g
        id="Group_346"
        data-name="Group 346"
        transform="translate(-329.71 -192)"
      >
        <text
          id="Delta_"
          data-name="Delta[+]"
          transform="translate(386 192)"
          fill="#4F5259"
          fontSize="46"
          fontFamily="UbuntuMono-Regular, Ubuntu Mono"
        >
          <tspan x="0" y="38">
            Delta[
          </tspan>
          <tspan
            y="38"
            fill="#16d57c"
            fontFamily="UbuntuMono-Bold, Ubuntu Mono"
            fontWeight="700"
          >
            +]
          </tspan>
        </text>
        <path
          id="Path_1"
          data-name="Path 1"
          d="M426.38,522.105l18.076,37.724H408.3Z"
          transform="translate(-78.594 -325.105)"
          fill="#1b62c2"
        />
      </g>
    </svg>
  );
};

export default Logo;
