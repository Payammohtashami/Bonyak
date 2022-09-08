import React from "react";
import cn from "classnames";


const icons:any = {
  back: (
    <svg viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1094_34)">
      <path d="M9.77182 13.0869L28.0543 13.0869C28.5763 13.0869 29 13.496 29 14C29 14.504 28.5763 14.913 28.0543 14.913L9.77182 14.913C9.24981 14.913 8.82616 14.504 8.82616 14C8.82616 13.496 9.24981 13.0869 9.77182 13.0869Z" />
      <path d="M14.8163 8.21748C15.0585 8.21748 15.3004 8.3062 15.4847 8.4852C15.8541 8.84185 15.8541 9.42009 15.4847 9.77697L11.1094 14.0011L15.4847 18.2255C15.8541 18.5822 15.8541 19.1606 15.4847 19.5173C15.115 19.874 14.5162 19.874 14.1468 19.5173L9.10338 14.6476C8.73398 14.2909 8.73398 13.7127 9.10338 13.356L14.1468 8.48653C14.3322 8.3062 14.5741 8.21748 14.8163 8.21748Z" />
      <path d="M13.8689 0.608617C19.6072 0.608617 24.6733 3.94181 26.7777 9.1013C26.9693 9.56875 26.7299 10.0995 26.2444 10.2845C25.7602 10.4671 25.2091 10.2395 25.0175 9.76825C23.2005 5.31382 18.8241 2.43471 13.8689 2.4347C7.26461 2.4347 1.8906 7.6234 1.8906 14C1.8906 20.3766 7.26461 25.5653 13.8689 25.5653C18.8241 25.5653 23.2005 22.6862 25.0175 18.2317C25.2105 17.7605 25.7602 17.5329 26.2444 17.7155C26.7299 17.9005 26.9693 18.4312 26.7777 18.8987C24.6733 24.0582 19.6072 27.3914 13.8689 27.3914C6.22176 27.3914 -0.000701379 21.3835 -0.000700734 14C-0.000700088 6.61651 6.22176 0.608616 13.8689 0.608617Z" />
    </g>
    <defs>
      <clipPath id="clip0_1094_34">
        <rect width="29" height="28" fill="white" transform="translate(29 28) rotate(-180)" />
      </clipPath>
    </defs>
  </svg>
  )
  
};

interface IconTypes {
  size?: any;
  name?: string;
  viewBox?: string;
  className?: string;
  width?: number;
  height?: number;
}
const Icon = (props: IconTypes)=> {
  const size = props.size ? props.size : 16;
  let name:any = props.name;
  let viewBox = "0 0 16 16";
  const withSvg:any = {
    face: true,
  };
  if (props.viewBox) viewBox = props.viewBox;
  return withSvg[name] ? (
    icons[name]
  ) : (
    <svg
      className={cn(props.className)}
      width={size}
      height={size}
      viewBox={viewBox}
    >
      {icons[name]}
    </svg>
  );
};

export default Icon;
