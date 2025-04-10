import { useEffect, useState } from "react";
import UvComponent from "./UvComponent";
import WindComponent from "./WindComponent";
import ForecastComponent from "./ForecastComponent";

const Card = (props) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  useEffect(() => {
    //console.log(props);
    if (props.currentWeather && props.forecastWeather) {
      setCurrentWeather(props.currentWeather);
      setForecastWeather(props.forecastWeather);
    }
  }, [props]);
  const WeatherIcon = () => {
    if (currentWeather) {
      return <img className="size-18" src={currentWeather.icon} alt="" />;
    } else {
      return;
    }
  };
  return (
    <>
      <div className="ms_card bg_transparent relative flex max-w-[30rem] flex-col rounded-[1.5rem] bg-clip-border ms_text-white shadow-md mx-auto mt-6">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border shadow-none">
          <h1 className="text-4xl font-semibold p-4 pb-2 mx-auto w-fit">
            {currentWeather ? currentWeather.city : ""}
          </h1>
          <div className="current-weather flex justify-center items-center pb-2">
            <WeatherIcon />
            <span className="temperature font-medium text-3xl">
              {currentWeather ? currentWeather.temp : ""}&deg;
            </span>
          </div>
          <div className="temperature flex justify-center">
            <span className="max p-2">
              MAX: {currentWeather ? currentWeather.max_temp : ""}
              &deg;
            </span>
            <span className="min p-2">
              MIN: {currentWeather ? currentWeather.min_temp : ""}
              &deg;
            </span>
          </div>
        </div>
        <div className="bg_dark p-2 rounded-[1.5rem]">
          <div className="grid grid-cols-3 gap-x-2">
            <div className="col-span-1 rounded-[1rem] bg_dark-grey aspect-square p-4">
              <div className="flex ">
                <svg
                  className="self-center me-1"
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#f8f8ff">
                    <path d="m15.0066 3.25608c1.8417-.39871 4.1265-.37878 7.2357.3966.5358.13361.8615.67523.7276 1.20973s-.6768.85949-1.2126.72588c-2.8907-.72087-4.8558-.70082-6.3265-.38242-1.4753.31937-2.5358.9528-3.6593 1.63776l-.0841.05131c-1.083.66071-2.28225 1.39235-3.86667 1.65575-1.64339.27319-3.58471.03166-6.1919-1.00882-.51276-.20463-.762156-.7852-.55703-1.29674.20512-.51154.78709-.76034 1.29985-.5557 2.3927.95487 3.9513 1.08756 5.12035.89322 1.18688-.1973 2.09173-.74349 3.2366-1.44146 1.1264-.68674 2.4408-1.48739 4.278-1.88511z" />
                    <path d="m22.2423 7.64302c-3.1092-.77537-5.394-.7953-7.2357-.3966-1.8372.39773-3.1516 1.19837-4.278 1.88511-1.14487.69797-2.04972 1.24417-3.2366 1.44147-1.16905.1943-2.72765.0616-5.12035-.89323-.51276-.20463-1.09473.04416-1.29985.55573-.205126.5115.04427 1.0921.55703 1.2967 2.60719 1.0405 4.54851 1.282 6.1919 1.0088 1.58442-.2634 2.78367-.995 3.86667-1.6557l.0841-.0513c1.1235-.685 2.184-1.31842 3.6593-1.63779 1.4707-.3184 3.4358-.33844 6.3265.38242.5358.13361 1.0787-.19137 1.2126-.72588.1339-.5345-.1918-1.07612-.7276-1.20973z" />
                    <path
                      clipRule="evenodd"
                      d="m18.9998 10.0266c-.3472 0-.6365.1793-.8384.4506-.0709.0958-.2348.32-.4525.6338-.2896.4173-.6772.9972-1.0665 1.6445-.3874.6441-.7871 1.3725-1.0929 2.0842-.2928.6816-.5506 1.4217-.5496 2.172.0007.2106.0259.4222.0605.6295.0578.346.1752.8224.42 1.3109.2468.4925.6327 1.0153 1.2303 1.4127.6039.4016 1.3641.6352 2.2891.6352s1.6852-.2336 2.289-.6352c.5976-.3974.9836-.9202 1.2304-1.4126.2448-.4886.3623-.965.4201-1.3109.0347-.2076.0602-.4198.0605-.6306.0003-.7503-.2568-1.4893-.5497-2.171-.3057-.7117-.7054-1.4401-1.0928-2.0842-.3893-.6473-.777-1.2272-1.0666-1.6445-.2177-.3138-.3817-.538-.4525-.6338-.2019-.2713-.4913-.4506-.8384-.4506zm1.6121 5.5991c-.2567-.5976-.607-1.2409-.9696-1.8437-.2205-.3666-.4416-.7118-.6425-1.0146-.2009.3028-.422.648-.6425 1.0146-.3625.6028-.7128 1.2461-.9695 1.8437l-.0146.0338c-.1767.4109-.3855.8967-.3731 1.3506.012.359.1087.7296.2692 1.0498.1281.2558.3047.4812.5508.6449.2399.1595.6047.3 1.1797.3s.9398-.1405 1.1797-.3c.2461-.1637.4227-.3892.5509-.6449.1605-.3202.2572-.6908.2692-1.0499.0125-.4537-.1964-.9395-.3731-1.3503z"
                      fillRule="evenodd"
                    />
                    <path d="m14.1296 11.5308c.7603-.2461 1.3432.5452.9857 1.2584-.1633.3259-.347.6032-.7122.7322-.9771.3452-1.7865.8313-2.6316 1.3465l-.0841.0513c-1.083.6607-2.28224 1.3923-3.86666 1.6557-1.64339.2732-3.5847.0317-6.1919-1.0088-.51276-.2046-.762152-.7852-.55703-1.2967.20513-.5116.78709-.7604 1.29986-.5557 2.39269.9548 3.9513 1.0875 5.12034.8932 1.18688-.1973 2.09173-.7435 3.23659-1.4415 1.088-.6633 2.2077-1.2483 3.401-1.6346z" />
                  </g>
                </svg>
                <h4 className="font-light">Humidity</h4>
              </div>
              <span className="text-4xl font-bold inline-block pt-3">
                {currentWeather ? currentWeather.humidity : ""}%
              </span>
            </div>
            <div className="col-span-1 rounded-[1rem] bg_dark-grey aspect-square p-4">
              <div className="flex">
                <svg
                  className="self-center "
                  height="24"
                  viewBox="0 0 56 56"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#f8f8ff"
                >
                  <path d="m25.0117 54.0391c6.75 0 12.2344-5.4844 12.2344-12.2344 0-3.5625-1.4765-6.6797-4.2656-9.2109-.5156-.4688-.6329-.7266-.6329-1.4297l.0469-21.0469c0-4.8985-2.9765-8.1563-7.3828-8.1563-4.4297 0-7.4062 3.2578-7.4062 8.1563l.0234 21.0469c0 .7031-.1172.9609-.6093 1.4297-2.8126 2.5312-4.2657 5.6484-4.2657 9.2109 0 6.75 5.461 12.2344 12.2578 12.2344zm0-3.3984c-4.875 0-8.8359-3.9844-8.8359-8.836 0-2.9297 1.3828-5.5781 3.8672-7.2422.7266-.4922 1.0078-.9375 1.0078-1.8984v-22.4063c0-2.9531 1.6172-4.8515 3.9609-4.8515 2.3203 0 3.9141 1.8984 3.9141 4.8515v22.4063c0 .9609.2812 1.4062 1.0078 1.8984 2.4844 1.6641 3.8672 4.3125 3.8672 7.2422 0 4.8516-3.9375 8.836-8.7891 8.836zm11.7422-40.0782h5.1094c.8203 0 1.3828-.6328 1.3828-1.3594 0-.7265-.5625-1.3593-1.3828-1.3593h-5.1094c-.8203 0-1.3828.6328-1.3828 1.3593 0 .7266.5625 1.3594 1.3828 1.3594zm0 6.586h5.1094c.8203 0 1.3828-.6329 1.3828-1.3594 0-.7266-.5625-1.3594-1.3828-1.3594h-5.1094c-.8203 0-1.3828.6328-1.3828 1.3594 0 .7265.5625 1.3594 1.3828 1.3594zm-11.7656 30.3281c3.1406 0 5.6719-2.5313 5.6719-5.6953 0-2.2032-1.2422-4.0079-3.0469-4.9922-.75-.3984-1.0078-.6797-1.0078-1.8282v-12.4453c0-1.2187-.7032-1.9453-1.6172-1.9453-.8907 0-1.6172.7266-1.6172 1.9453v12.4453c0 1.1485-.2578 1.4298-1.0078 1.8282-1.8047.9843-3.0469 2.789-3.0469 4.9922 0 3.164 2.5312 5.6953 5.6719 5.6953zm11.7656-23.7422h5.1094c.8203 0 1.3828-.6328 1.3828-1.3594 0-.7265-.5625-1.3828-1.3828-1.3828h-5.1094c-.8203 0-1.3828.6563-1.3828 1.3828 0 .7266.5625 1.3594 1.3828 1.3594zm0 6.5859h5.1094c.8203 0 1.3828-.6562 1.3828-1.3828s-.5625-1.3593-1.3828-1.3593h-5.1094c-.8203 0-1.3828.6327-1.3828 1.3593s.5625 1.3828 1.3828 1.3828z" />
                </svg>
                <h4 className="font-light">Perceived</h4>
              </div>
              <span className="text-4xl font-bold inline-block pt-3">
                {currentWeather ? currentWeather.feelslike_temp : ""}
                &deg;
              </span>
            </div>
            <div className="col-span-1 rounded-[1rem] bg_dark-grey aspect-square p-4">
              <div className="flex">
                <svg
                  className="self-center me-1"
                  height="18"
                  width="18"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 26 26"
                  xmlSpace="preserve"
                  fill="#f8f8ff"
                >
                  <g>
                    <path
                      d="M13.014,11.002c-1.107,0.008-2.008-0.884-2.016-1.987c-0.009-1.107,0.879-2.007,1.987-2.016
		c0.166-0.001,0.324,0.023,0.478,0.06c1.156-0.905,2.667-2.085,2.839-2.208c0.298-0.211,0.64-0.236,0.883,0.007
		c0.24,0.248,0.215,0.623-0.01,0.886c-0.077,0.091-1.295,1.622-2.229,2.798c0.034,0.143,0.056,0.291,0.057,0.444
		C15.012,10.088,14.122,10.994,13.014,11.002z M0,21c0-0.553,0.448-1,1-1h9v-2.525C6.51,16.236,4,12.91,4,9c0-4.962,4.038-9,9-9
		c4.963,0,9,4.038,9,9c0,3.91-2.51,7.236-6,8.475V20h9c0.553,0,1,0.447,1,1s-0.447,1-1,1H1C0.448,22,0,21.553,0,21z M13,15
		c3.309,0,6-2.691,6-6s-2.691-6-6-6S7,5.691,7,9S9.691,15,13,15z M25,24H1c-0.552,0-1,0.447-1,1s0.448,1,1,1h24c0.553,0,1-0.447,1-1
		S25.553,24,25,24z"
                    />
                  </g>
                </svg>
                <h4 className="font-light">Pressure</h4>
              </div>
              <span className="text-4xl font-bold inline-block pt-3">
                {currentWeather ? currentWeather.pressure : ""}
                <span className="text-base ps-0.5">mb</span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-2 mt-4">
            <WindComponent
              windDegree={currentWeather ? currentWeather.wind_degree : null}
              windSpeed={currentWeather ? currentWeather.wind_speed : null}
            />
            <UvComponent uvIndex={currentWeather ? currentWeather.uv : null} />
          </div>
          <ForecastComponent
            forecastWeather={forecastWeather ? forecastWeather : null}
          />
        </div>
      </div>
      <div className="w-full pt-5 px-4 mb-8 mx-auto "></div>
    </>
  );
};

export default Card;
