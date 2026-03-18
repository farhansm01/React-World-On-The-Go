import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const flagUrl = country.flags.flags.png;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "country-visited"} `}>
      <img src={flagUrl} alt={country.flags.flags.alt} />
      <h4>Name: {country.name.common} </h4>
      <p>
        Area: {country.area.area} km²{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Mark as Visited"}
      </button>
    </div>
  );
};

export default Country;
