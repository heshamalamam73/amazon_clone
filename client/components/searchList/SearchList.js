/** @format */

import styles from "./SearchList.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import SignList from "../signList/SignList";
function SearchList({ countries = [] }) {
  const [keyword, setKeyword] = useState("");

  const filterdCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  useEffect(() => {
    const app = document.getElementById("allapp");
    const input = document.getElementById("input");
    input.addEventListener("input", function () {
      const list = document.getElementById("searchlist");
      setKeyword(this.value.toLowerCase());
      if (filterdCountries.length > 0 && this.value != "") {
        list.style.display = "block";
        app.classList.add("disactive");
      } else {
        list.style.display = "none";
        app.classList.remove("disactive");
      }
    });
  }, []);
  return (
    <div className={styles.container} id="searchlist">
      {filterdCountries.map((country) => (
        <Link href={`products/${country.alpha3Code}`}>
          <a className={styles.search_item}>{country.name}</a>
        </Link>
      ))}
    </div>
  );
}

export default SearchList;
