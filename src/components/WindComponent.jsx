import { useEffect, useState } from "react";
import Compass from "../assets/wind_bg.png";
import Arrow from "../assets/arrow.svg";
import "./WindComponent.css";
const WindComponent = (props) => {
  const [windDegree, setWindDegree] = useState(0);
  const [windSpeed, setWindSpeed] = useState(null);
  useEffect(() => {
    //console.log(props);
    if (props.windDegree && props.windSpeed) {
      setWindDegree(props.windDegree);
      setWindSpeed(props.windSpeed);
    }
  }, [props]);
  return (
    <div className="xs:col-span-2 rounded-[1rem] bg_dark-grey  p-4">
      <div className="flex">
        <svg
          className="self-center me-1"
          height="24"
          width="24"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 122.88 74.78"
          xmlSpace="preserve"
          fill="#f8f8ff"
        >
          <g>
            <path d="M28.69,53.38c-1.61,0-2.91-1.3-2.91-2.91c0-1.61,1.3-2.91,2.91-2.91h51.37c0.21,0,0.42,0.02,0.62,0.07 c1.84,0.28,3.56,0.8,5.1,1.63c1.7,0.92,3.15,2.19,4.27,3.89c3.85,5.83,3.28,11.24,0.56,15.24c-1.77,2.61-4.47,4.55-7.45,5.57 c-3,1.03-6.32,1.13-9.32,0.03c-4.54-1.66-8.22-5.89-8.76-13.55c-0.11-1.6,1.1-2.98,2.7-3.09c1.6-0.11,2.98,1.1,3.09,2.7 c0.35,4.94,2.41,7.56,4.94,8.48c1.71,0.62,3.67,0.54,5.48-0.08c1.84-0.63,3.48-1.79,4.52-3.32c1.49-2.19,1.71-5.28-0.61-8.79 c-0.57-0.86-1.31-1.51-2.18-1.98c-0.91-0.49-1.97-0.81-3.13-0.99H28.69L28.69,53.38z M15.41,27.21c-1.61,0-2.91-1.3-2.91-2.91 c0-1.61,1.3-2.91,2.91-2.91h51.21c1.17-0.18,2.23-0.5,3.14-0.99c0.87-0.47,1.61-1.12,2.18-1.98c2.32-3.51,2.09-6.6,0.61-8.79 c-1.04-1.53-2.68-2.69-4.52-3.32c-1.81-0.62-3.78-0.7-5.48-0.08c-2.52,0.92-4.59,3.54-4.94,8.48c-0.11,1.6-1.49,2.81-3.09,2.7 c-1.6-0.11-2.81-1.49-2.7-3.09c0.54-7.66,4.22-11.89,8.76-13.55c3-1.09,6.32-0.99,9.32,0.03c2.98,1.02,5.68,2.97,7.45,5.57 c2.72,4,3.29,9.41-0.56,15.24c-1.12,1.7-2.57,2.97-4.27,3.89c-1.54,0.83-3.26,1.35-5.1,1.63c-0.2,0.04-0.41,0.07-0.62,0.07H15.41 L15.41,27.21z M2.91,40.3C1.3,40.3,0,38.99,0,37.39c0-1.61,1.3-2.91,2.91-2.91h107.07c1.17-0.18,2.23-0.5,3.13-0.99 c0.87-0.47,1.61-1.12,2.18-1.98c2.32-3.51,2.09-6.6,0.61-8.79c-1.04-1.53-2.68-2.69-4.52-3.32c-1.81-0.62-3.78-0.7-5.48-0.08 c-2.52,0.92-4.59,3.54-4.94,8.48c-0.11,1.6-1.49,2.81-3.09,2.7c-1.6-0.11-2.81-1.49-2.7-3.09c0.54-7.66,4.22-11.89,8.76-13.55 c3-1.09,6.32-0.99,9.32,0.03c2.98,1.02,5.68,2.97,7.45,5.57c2.72,4,3.29,9.41-0.56,15.24c-1.12,1.7-2.57,2.97-4.27,3.89 c-1.54,0.83-3.26,1.35-5.1,1.63c-0.2,0.04-0.41,0.07-0.62,0.07H2.91L2.91,40.3z" />
          </g>
        </svg>
        <h4>Wind</h4>
        <div className="num-degrees ms-auto px-2">{windDegree} &deg;</div>
        <div className="speed px-2">{windSpeed} km/h</div>
      </div>
      <div className="grid grid-cols-1 p-1">
        <div className="degrees text-white relative">
          <img className="max-w-full" src={Compass} alt="" />
          <img
            style={{ rotate: windDegree + "deg" }}
            className="arrow-icon"
            src={Arrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WindComponent;
