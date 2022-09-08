import React from "react";
import cn from "classnames";


const icons:any = {
  youtube: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 17">
      <path id="youtube" d="M23.469,5.929l.03.2a3.043,3.043,0,0,0-2.068-2.112l-.021-.005c-1.871-.508-9.4-.508-9.4-.508s-7.51-.01-9.4.508A3.044,3.044,0,0,0,.527,6.1l0,.021A33.454,33.454,0,0,0,.553,18.072l-.031-.2A3.043,3.043,0,0,0,2.59,19.986l.021,0c1.869.509,9.4.509,9.4.509s7.509,0,9.4-.509a3.043,3.043,0,0,0,2.084-2.1l0-.021a31.265,31.265,0,0,0,.5-5.648c0-.073,0-.147,0-.221s0-.149,0-.23a32.256,32.256,0,0,0-.531-5.846ZM9.608,15.651V8.358l6.266,3.652Z" transform="translate(0 -3.5)" fill="#fff"/>
    </svg>
  ),
  linkdin: (
    <svg id="linkedin_1_" data-name="linkedin (1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.834 20.834">
      <g id="Group_552" data-name="Group 552" transform="translate(0 6.511)">
        <g id="Group_551" data-name="Group 551">
          <rect id="Rectangle_105" data-name="Rectangle 105" width="4.659" height="14.324" fill="#fff"/>
        </g>
      </g>
      <g id="Group_554" data-name="Group 554" transform="translate(6.511 6.511)">
        <g id="Group_553" data-name="Group 553">
          <path id="Path_1193" data-name="Path 1193" d="M170.839,160.168c-.049-.016-.1-.033-.148-.047s-.125-.026-.189-.036a4.176,4.176,0,0,0-.836-.085,6.473,6.473,0,0,0-5.007,2.738V160H160v14.324h4.659v-7.813s3.521-4.9,5.007-1.3v9.115h4.658v-9.666A4.646,4.646,0,0,0,170.839,160.168Z" transform="translate(-160 -160)" fill="#fff"/>
        </g>
      </g>
      <g id="Group_556" data-name="Group 556">
        <g id="Group_555" data-name="Group 555">
          <ellipse id="Ellipse_16" data-name="Ellipse 16" cx="2.279" cy="2.279" rx="2.279" ry="2.279" fill="#fff"/>
        </g>
      </g>
    </svg>
  ),
  twitter: (
    <svg id="twitter_1_" data-name="twitter (1)" xmlns="http://www.w3.org/2000/svg" width="24.802" height="20.151" viewBox="0 0 24.802 20.151">
      <g id="Group_550" data-name="Group 550" transform="translate(0 0)">
        <path id="Path_1192" data-name="Path 1192" d="M24.8,50.386a10.6,10.6,0,0,1-2.93.8,5.056,5.056,0,0,0,2.237-2.81,10.161,10.161,0,0,1-3.224,1.231,5.084,5.084,0,0,0-8.8,3.477,5.235,5.235,0,0,0,.118,1.159,14.392,14.392,0,0,1-10.48-5.318,5.086,5.086,0,0,0,1.563,6.8,5.021,5.021,0,0,1-2.3-.626v.056a5.108,5.108,0,0,0,4.074,5,5.075,5.075,0,0,1-1.333.167,4.5,4.5,0,0,1-.963-.087,5.133,5.133,0,0,0,4.751,3.542,10.217,10.217,0,0,1-6.3,2.169A9.523,9.523,0,0,1,0,65.87a14.314,14.314,0,0,0,7.8,2.282A14.372,14.372,0,0,0,22.272,53.683c0-.225-.008-.442-.019-.657A10.143,10.143,0,0,0,24.8,50.386Z" transform="translate(0 -48)" fill="#fff"/>
      </g>
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.039 23.039">
      <g id="instagram_2_" data-name="instagram (2)" transform="translate(1 1)">
        <g id="Group_545" data-name="Group 545">
          <g id="Group_544" data-name="Group 544">
            <path id="Path_1190" data-name="Path 1190" d="M14.465,0H6.575A6.575,6.575,0,0,0,0,6.575v7.89a6.575,6.575,0,0,0,6.575,6.575h7.89a6.575,6.575,0,0,0,6.575-6.575V6.575A6.575,6.575,0,0,0,14.465,0Z" fill="none" stroke="#fff" stroke-width="2"/>
          </g>
        </g>
        <g id="Group_547" data-name="Group 547" transform="translate(6.26 6.26)">
          <g id="Group_546" data-name="Group 546">
            <path id="Path_1191" data-name="Path 1191" d="M132.606,128a4.606,4.606,0,1,0,4.606,4.606A4.607,4.607,0,0,0,132.606,128Z" transform="translate(-128 -128)" fill="none" stroke="#fff" stroke-width="2"/>
          </g>
        </g>
        <g id="Group_549" data-name="Group 549" transform="translate(15.473 4.164)">
          <g id="Group_548" data-name="Group 548">
            <ellipse id="Ellipse_15" data-name="Ellipse 15" cx="0.701" cy="0.701" rx="0.701" ry="0.701" fill="#fff" stroke="#fff" stroke-width="1"/>
          </g>
        </g>
      </g>
    </svg>
  ),
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="10.491" height="20.983" viewBox="0 0 10.491 20.983">
      <path id="Path_1194" data-name="Path 1194" d="M134.557,7.213V4.59a1.312,1.312,0,0,1,1.311-1.311h1.311V0h-2.623a3.934,3.934,0,0,0-3.934,3.934V7.213H128v3.279h2.623V20.983h3.934V10.491h2.623l1.311-3.279Z" transform="translate(-128)" fill="#fff"/>
    </svg>
  ),
  pintrest: (
    <svg xmlns="http://www.w3.org/2000/svg" width="17.874" height="22" viewBox="0 0 17.874 22">
      <path id="pinterest" d="M11.486,0C5.456,0,2.25,3.865,2.25,8.078c0,1.953,1.092,4.391,2.84,5.164.5.225.433-.049.862-1.69a.389.389,0,0,0-.094-.382c-2.5-2.89-.488-8.832,5.272-8.832,8.335,0,6.778,11.533,1.45,11.533a1.967,1.967,0,0,1-2.073-2.412c.392-1.589,1.16-3.3,1.16-4.441,0-2.886-4.3-2.458-4.3,1.366a4.625,4.625,0,0,0,.418,1.979S6.4,15.95,6.147,16.994a14.829,14.829,0,0,0,.1,4.875.145.145,0,0,0,.264.067,17.287,17.287,0,0,0,2.277-4.288c.17-.628.87-3.176.87-3.176A3.8,3.8,0,0,0,12.866,16c4.213,0,7.258-3.7,7.258-8.3C20.109,3.3,16.339,0,11.486,0Z" transform="translate(-2.25)" fill="#fff"/>
    </svg>
  ),
  calendar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16.036" height="16.4" viewBox="0 0 16.036 16.4">
      <g id="calendar_1_" data-name="calendar (1)" transform="translate(-5.411)">
        <g id="Group_1462" data-name="Group 1462" transform="translate(5.411)">
          <path id="Path_3902" data-name="Path 3902" d="M119.078,258.614a.372.372,0,0,0-.372-.372h-1.3a.372.372,0,0,0-.372.372v1.3a.372.372,0,0,0,.372.372h1.3a.372.372,0,0,0,.372-.372v-1.3Z" transform="translate(-113.285 -249.566)" fill="#c7c9d9"/>
          <path id="Path_3903" data-name="Path 3903" d="M215.713,258.614a.372.372,0,0,0-.372-.372h-1.3a.372.372,0,0,0-.372.372v1.3a.372.372,0,0,0,.372.372h1.3a.372.372,0,0,0,.372-.372Z" transform="translate(-206.673 -249.566)" fill="#c7c9d9"/>
          <path id="Path_3904" data-name="Path 3904" d="M312.341,258.614a.372.372,0,0,0-.372-.372h-1.3a.372.372,0,0,0-.372.372v1.3a.372.372,0,0,0,.372.372h1.3a.372.372,0,0,0,.372-.372Z" transform="translate(-300.055 -249.566)" fill="#c7c9d9"/>
          <path id="Path_3905" data-name="Path 3905" d="M119.078,355.247a.372.372,0,0,0-.372-.372h-1.3a.372.372,0,0,0-.372.372v1.3a.372.372,0,0,0,.372.372h1.3a.372.372,0,0,0,.372-.372v-1.3Z" transform="translate(-113.285 -342.953)" fill="#c7c9d9"/>
          <path id="Path_3906" data-name="Path 3906" d="M215.713,355.247a.372.372,0,0,0-.372-.372h-1.3a.372.372,0,0,0-.372.372v1.3a.372.372,0,0,0,.372.372h1.3a.372.372,0,0,0,.372-.372Z" transform="translate(-206.673 -342.953)" fill="#c7c9d9"/>
          <path id="Path_3907" data-name="Path 3907" d="M312.341,355.247a.372.372,0,0,0-.372-.372h-1.3a.372.372,0,0,0-.372.372v1.3a.372.372,0,0,0,.372.372h1.3a.372.372,0,0,0,.372-.372v-1.3Z" transform="translate(-300.055 -342.953)" fill="#c7c9d9"/>
          <path id="Path_3908" data-name="Path 3908" d="M20.02,54.149v1.984A1.62,1.62,0,0,1,18.4,57.752H17.372a1.629,1.629,0,0,1-1.634-1.619V54.142H11.12v1.991a1.629,1.629,0,0,1-1.634,1.619H8.462a1.62,1.62,0,0,1-1.624-1.619V54.149a1.477,1.477,0,0,0-1.427,1.469V67.244a1.477,1.477,0,0,0,1.47,1.479h13.1a1.479,1.479,0,0,0,1.47-1.479V55.618A1.477,1.477,0,0,0,20.02,54.149ZM19.544,66.52a.636.636,0,0,1-.636.636H7.922a.636.636,0,0,1-.636-.636V60.515a.636.636,0,0,1,.636-.636H18.909a.636.636,0,0,1,.636.636V66.52Z" transform="translate(-5.411 -52.323)" fill="#c7c9d9"/>
          <path id="Path_3909" data-name="Path 3909" d="M80.107,4.366H81.12a.557.557,0,0,0,.557-.557V.557A.557.557,0,0,0,81.12,0H80.107a.557.557,0,0,0-.557.557V3.809A.557.557,0,0,0,80.107,4.366Z" transform="translate(-77.059 0)" fill="#c7c9d9"/>
          <path id="Path_3910" data-name="Path 3910" d="M345.015,4.366h1.013a.557.557,0,0,0,.557-.557V.557A.557.557,0,0,0,346.028,0h-1.013a.557.557,0,0,0-.557.557V3.809A.557.557,0,0,0,345.015,4.366Z" transform="translate(-333.067 0)" fill="#c7c9d9"/>
        </g>
      </g>
    </svg>
  ),
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
