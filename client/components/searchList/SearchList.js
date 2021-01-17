/** @format */

import styles from "./SearchList.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import SignList from "../signList/SignList";
function SearchList() {
  const [keyword, setKeyword] = useState("");
  const [allCountries, setAllCountries] = useState([]);

  const filterdCountries = allCountries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );
  const makeRequest = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await res.json();
    setAllCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    makeRequest();
    const app = document.getElementById("allapp");
    const input = document.getElementById("input");
          const list = document.getElementById("searchlist");

    input.addEventListener("input", function () {
      setKeyword(this.value.toLowerCase());
        list.style.display = "block";
      app.classList.add("disactive");
      if (this.value === 0 || !this.value) {
         list.style.display = "none";
         app.classList.remove("disactive");
      }
    });
    app.addEventListener('click', function () {
      list.style.display = "none";
            app.classList.remove("disactive");
    })
  }, []);
  return (
    <div className={styles.container} id="searchlist">
      {filterdCountries.map((country) => (
        <Link href={`/products/${country.alpha3Code}`}>
          <a className={styles.search_item}>{country.name}</a>
        </Link>
      ))}
    </div>
  );
}

export default SearchList;
