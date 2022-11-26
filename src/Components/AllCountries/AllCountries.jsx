import React from "react";
import { useState, useEffect } from "react";
import { apiURL } from "../util/api";

function AllCountries() {
  const [countries, SetCountries] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiURL}/all`);

      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();
      console.log(data);

      SetCountries(data);

      SetIsLoading(false);
    } catch (error) {
      SetIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="all_country_wrapper">
      <div className="country_top"></div>
      <div className="country_bottom">
        {isLoading && !error && <h4>Loading....</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {
            countries?.map(country=>(
                
                <div className="country_card">
                    <div className="country_img">
                        <img src={country.flags.png} alt=''/>
                    </div>
                    <div className="country_data">
                        <h3>{country.name.common}</h3>
                        <h6>Population:{country.population}</h6>
                        <h6>Region:{country.Region}</h6>
                        <h6>Capital:{country.capital}</h6>

                    </div>
                </div>
                
            ))
        }
      </div>
    </div>
  );
}

export default AllCountries;
