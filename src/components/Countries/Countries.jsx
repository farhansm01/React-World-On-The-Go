import { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise, selectedContinent }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  console.log("Countries data:", countries);

  const filteredCountries = selectedContinent
    ? countries.filter((c) =>
        c.continents.continents.includes(selectedContinent),
      )
    : countries;

  return (
    <div>
      <div className="visited-counter">
        Total<span>{filteredCountries.length}</span> countries
        {selectedContinent ? <span> in {selectedContinent}</span> : ""}
      </div>
      <br />
      <br />
      <div className="countries">
        {filteredCountries.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
