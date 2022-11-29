import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../util/api";
import { Link } from "react-router-dom";

function CountryInfo() {
  const [country, setCountry] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  

  useEffect(() => {
    const getCountryByName = async () => {
        try {
          const res = await fetch(`${apiURL}/name/${countryName}`);
    
          if (!res.ok) throw new Error("Could not Found");
    
          const data = await res.json();
    
          setCountry(data);
          SetIsLoading(false);
        } catch (error) {
          SetIsLoading(false);
          setError(error.message);
        }
      };
    getCountryByName();
  }, [countryName]);
  return (
    <div className="country_info_wrapper">
      <button>
        <Link to="/">Back</Link>
      </button>

      {country?.map((country, index) => (
        <div className="country_info_container" key={index}>
          <div className="country_info-img">
            <img src={country.flags.png}></img>
          </div>
          <div className="country_info">
            <h3>{country.name.common}</h3>
            <div className="country_info-left">
              <h5>
                Native Name: <span>{country.name.common}</span>
              </h5>
              <h5>
                Population: <span>{country.population}</span>
              </h5>
              <h5>
                Region: <span>{country.region}</span>
              </h5>
              <h5>
                Capital: <span>{country.capital}</span>
              </h5>
            </div>
          </div>
        </div>
      ))}

      <div className="country_info_container">
        <div className="country_info-img"></div>
      </div>
    </div>
  );
}

export default CountryInfo;
