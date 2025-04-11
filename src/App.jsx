import Card from "./components/Card";
import Video from "./components/Video";
import Searchbar from "./components/Searchbar";
import { useEffect, useState, useRef } from "react";
import ErrorComponent from "./components/ErrorComponent";
import lodash from "lodash";
import Loader from "./components/Loader";

function App() {
  const initialQuery = "Paris";
  const forecastDays = 3;
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [isCurrentReady, setIsCurrentReady] = useState(false);
  const [isForecastReady, setIsForecastReady] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState([]);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const dayNames = useRef([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);

  useEffect(() => {
    //console.log(query);
    if (query !== "") {
      getCurrentWeather(query);
    } else {
      getCurrentWeather(initialQuery);
    }
  }, [initialQuery, query]);

  useEffect(() => {
    //console.log(isCurrentReady);
    if (isCurrentReady) {
      //console.log(query);
      if (query !== "") {
        getForecast(query, forecastDays);
      } else {
        getForecast(initialQuery, forecastDays);
      }
    }
  }, [isCurrentReady]);

  //handle the App state from child component Searchbar

  const handleQuery = (query) => {
    setQuery(query);
  };

  const handleError = (bool) => {
    setError(false);
  };

  const handleLoaders = (bool) => {
    setIsCurrentReady(bool);
    setIsForecastReady(bool);
  };
  //debounce searchbar
  const debouncedQuery = lodash.debounce(handleQuery, 500);

  //creating a function that given a number of days return a dayname
  //example: days = 1 => return tomorrow, days = 2 => return the day after tomorrow
  const getNextDay = (days) => {
    let nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + days);
    nextDay = nextDay.getDay();
    return dayNames.current[nextDay];
  };

  const addDaysToForecast = (forecast) => {
    //console.log(forecast);
    const forecastWithDays = forecast.map((day, index) => {
      //console.log(day);
      return (day = { dayname: getNextDay(index), ...day });
    });
    //console.log(forecastWithDays);

    return forecastWithDays;
  };

  const getCurrentWeather = async function (query) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`
    );
    if (response.status === 200) {
      /*  resolve the promise */
      response
        .json()
        .then((data) => {
          //console.log(data);
          setCurrentWeather({
            city: data.location.name,
            temp: data.current.temp_c,
            humidity: data.current.humidity,
            feelslike_temp: data.current.feelslike_c,
            pressure: data.current.pressure_mb,
            wind_degree: data.current.wind_degree,
            wind_speed: data.current.wind_kph,
            uv: data.current.uv,
            icon: data.current.condition.icon,
          });
          //console.log("current");
          setError(false);
          setTimeout(setIsCurrentReady(true), 500);
        })
        .catch((err) => {
          /* show error component */
          setError(true);
          console.log("error component", err);
        });
    } else {
      /* show error component */
      setError(true);
      console.log("error component");
    }
  };

  const getForecast = async function (query, days) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=${days}`
    );

    if (response.status === 200) {
      /*  resolve the promise */
      response
        .json()
        .then((data) => {
          //save the current weather min and max temp
          setCurrentWeather({
            ...currentWeather,
            max_temp: data.forecast.forecastday[0].day.maxtemp_c,
            min_temp: data.forecast.forecastday[0].day.mintemp_c,
          });
          //console.log(currentWeather);
          //save the min and max temp for the 3 days of forecast
          const forecast = [];
          for (let i = 1; i < forecastDays; i++) {
            forecast.push({
              max_temp: data.forecast.forecastday[i].day.maxtemp_c,
              min_temp: data.forecast.forecastday[i].day.mintemp_c,
              icon: data.forecast.forecastday[i].day.condition.icon,
            });
          }
          setForecastWeather(addDaysToForecast(forecast));
          setError(false);
          setTimeout(setIsForecastReady(true), 500);
        })
        .catch((err) => {
          /* show error component */
          setError(true);
          console.log("error component", err);
        });
    } else {
      /* show error component */
      setError(true);
      console.log("error component");
    }
  };

  const IsLoading = ({ error }) => {
    //console.log(error);
    if (isCurrentReady && isForecastReady) {
      return (
        <Card
          currentWeather={currentWeather}
          forecastWeather={forecastWeather}
        />
      );
    }
    if (!(isCurrentReady && isForecastReady) && !error) {
      return <Loader />;
    }
    if (error) {
      return <ErrorComponent />;
    }
  };

  return (
    <>
      <main id="main">
        <Video />
        <div className="xl:container mx-auto">
          <Searchbar
            sendQueryToApp={debouncedQuery}
            setLoaders={handleLoaders}
            setError={handleError}
          />
          <IsLoading error={error} />
        </div>
      </main>
    </>
  );
}

export default App;
