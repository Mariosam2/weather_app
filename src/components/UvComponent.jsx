import { useEffect, useState } from "react";
import "./UvComponent.css";
import { SunIcon } from "@heroicons/react/24/solid";
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
    <div className="col-span-1 rounded-[1rem] bg_dark-grey aspect-square p-4">
      <div className="flex">
        <SunIcon className="size-6 ms_text-white me-1 self-center" />
        <h4 className="font-light">UV Index</h4>
      </div>
      <span className="text-4xl font-bold inline-block pt-3">
        {props.uvIndex}
      </span>
      <div className="uv-bar h-[4px] rounded-full  mt-4 relative">
        <div
          style={{ left: percentage + "%" }}
          className="indicator h-[12px] w-[4px] rounded"
        ></div>
      </div>
    </div>
  );
};

export default UvComponent;
