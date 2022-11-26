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
      <div className="country_bottom"></div>
    </div>
  );
}

export default AllCountries;
