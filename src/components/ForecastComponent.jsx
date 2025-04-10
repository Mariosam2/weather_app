import { useEffect, useState } from "react";

const ForecastComponent = (props) => {
  const [forecastWeather, setForecastWeather] = useState(null);
  useEffect(() => {
    if (props.forecastWeather) {
      setForecastWeather(props.forecastWeather);
    }
  }, [props]);

  return (
    <div className="forecast grid grid-cols-2   mt-4">
      {forecastWeather
        ? forecastWeather.map((day, index) => {
            return (
              <div
                className="forecast-content flex items-center bg_dark-grey rounded-[1rem] p-2 m-1"
                key={index}
              >
                <h4 className="py-2 ps-2">{day.dayname}</h4>

                <div className="forecast-temps ms-auto">
                  <img className="size-8" src={day.icon} alt="" />
                  <div className="flex items-center">
                    <span className="min text-sm p-2">
                      {day.min_temp}
                      &deg;
                    </span>
                    <div className="h-[3px] w-5 bg-white rounded"></div>
                    <span className="max text-sm p-2">
                      {day.max_temp}
                      &deg;
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default ForecastComponent;
