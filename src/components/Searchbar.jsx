import { useEffect, useState } from "react";

const Searchbar = ({ sendQueryToApp, setLoaders, setError }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    //console.log(query);

    sendQueryToApp(query);
  }, [query]);

  const handleInput = (e) => {
    setLoaders(false);
    setError(false);
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="searchbar flex justify-center pt-10">
        <input
          onChange={handleInput}
          className="min-w-80 p-2 focus:outline-none"
          type="text"
          placeholder="Search.."
          value={query}
        ></input>
      </div>
    </>
  );
};

export default Searchbar;
