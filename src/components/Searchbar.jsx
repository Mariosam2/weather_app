import { useEffect, useState } from "react";
import "./Searchbar.css";
import lookup from "country-code-lookup";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const Searchbar = ({ sendQueryToApp, setLoaders, setError }) => {
  const [query, setQuery] = useState("");
  const [autoCompleteResults, setAutoCompleteResults] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [wasFilled, setWasFilled] = useState(false);
  const maxResults = 5;
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  useEffect(() => {
    //console.log(query);
    sendQueryToApp(query);
    if (query !== "") {
      getAutocompleteCities(query);
    }
  }, [query]);

  useEffect(() => {
    if (autoCompleteResults.length > 0) {
      //console.log(autoCompleteResults);
    }
  }, [autoCompleteResults]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      //console.log(e.target.classList);
      if (
        !e.target.classList.contains("searchbar") &&
        !e.target.classList.contains("autocomplete") &&
        !e.target.classList.contains("autocomplete-result")
      ) {
        setShowAutocomplete(false);
      }
    });
  }, []);

  const handleChange = (e) => {
    setLoaders(false);
    setError(false);
    setWasFilled(false);
    setShowAutocomplete(true);
    setQuery(e.target.value);
  };

  const handleFocus = () => {
    if (!wasFilled) {
      setShowAutocomplete(true);
    }

    //console.log(autoCompleteResults);
  };

  const fillSearchbar = (e) => {
    setQuery(e.target.innerHTML);
    setShowAutocomplete(false);
    setLoaders(false);
    setWasFilled(true);
  };

  //helper function that cleans country name to pass it to the lookup.byCountry
  //ex: Cape Verde Islands and United States of Americas throw an error

  const cleanCountryName = (countryName) => {
    let cleanedCountryName = countryName;

    if (countryName === "United States of America") {
      cleanedCountryName = "United States";
    } else if (countryName === "Cape Verde Islands") {
      cleanedCountryName = "Cape Verde";
    }
    return cleanedCountryName;
  };

  const getAutocompleteCities = async (query) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}`
    );
    if (response.status === 200) {
      response
        .json()
        .then((data) => {
          //console.log(data);
          let resultsToDisplay;
          if (data.length < maxResults) {
            resultsToDisplay = data.length;
          } else {
            resultsToDisplay = maxResults;
          }
          let results = [];
          for (let i = 0; i < resultsToDisplay; i++) {
            /*  console.log(
              data[i].country,
              lookup.byCountry(data[i].country),
              lookup.byCountry(data[i].country).fips
            ); */
            const countryName = cleanCountryName(data[i].country);
            const countryCode = lookup.byCountry(countryName).fips;
            const result = {
              name: data[i].name,
              region: data[i].region,
              country: countryCode,
            };
            results.push(result);
          }

          setAutoCompleteResults(results);
        })
        .catch((err) => {
          console.log("autocomplete error", err);
        });
    } else {
      console.log("autocomplete error");
    }
  };

  return (
    <>
      <div className="searchbar-container pt-10">
        <div className="bg-white flex justify-center items-center w-max mx-auto rounded-[1rem] relative ">
          <MagnifyingGlassIcon className="size-6 mx-1 " />
          <input
            onChange={handleChange}
            onFocus={handleFocus}
            className="searchbar w-80 p-2 focus:outline-none  border-s border-black rounded-r-[1rem]"
            type="text"
            placeholder="Search.."
            value={query}
          ></input>

          {autoCompleteResults.length > 0 && showAutocomplete ? (
            <div className="autocomplete absolute min-w-80 w-max bg-white  border-t border-black">
              {autoCompleteResults.map((result, index) => {
                return (
                  <div
                    key={index}
                    onClick={fillSearchbar}
                    className="autocomplete-result p-2"
                  >
                    {result.name + ", " + result.region + ", " + result.country}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Searchbar;
