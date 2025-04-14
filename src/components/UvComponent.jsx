import { useEffect, useState } from "react";
import "./UvComponent.css";
import { SunIcon } from "@heroicons/react/24/solid";
import ForecastComponent from "./ForecastComponent";
const UvComponent = (props) => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (props.uvIndex) {
      getPercentageFromIndex(props.uvIndex);
    }
  }, [props]);

  const getPercentageFromIndex = (uvIndex) => {
    if (uvIndex < 10) {
      setPercentage(uvIndex * 10);
    } else {
      setPercentage(100);
    }
  };
  return (
    <div className=" flex gap-x-2 xs:col-span-1   ">
      <div className="uv-container p-4 bg_dark-grey rounded-[1rem] flex-grow h-max ">
        <div className="flex">
          <SunIcon className="block xxs:hidden xs:block size-6 ms_text-white me-1 self-center" />
          <h4 className="font-light">UV Index</h4>
        </div>
        <span className="text-3xl xs:text-4xl font-bold inline-block pt-1 xs:pt-3">
          {props.uvIndex}
        </span>
        <div className="uv-bar h-[4px] rounded-full  mt-4 relative">
          <div
            style={{ left: percentage + "%" }}
            className="indicator h-[12px] w-[4px] rounded"
          ></div>
        </div>
      </div>
      <ForecastComponent
        isMobile={true}
        forecastWeather={props.forecastWeather}
      />
    </div>
  );
};

export default UvComponent;
