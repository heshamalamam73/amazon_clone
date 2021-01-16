/** @format */

import styles from "./LeftNav.module.css";
function LeftNav({ countries, handleChange }) {
  return (
    <div className={styles.filter_list}>
      {countries.map((country) => (
        <div>
          <input
            className={styles.input}
            type="checkbox"
            name={country.region}
            value={country.region}
            onChange={handleChange}
          />
          <label>{country.region}</label>
          <br />
        </div>
      ))}
    </div>
  );
}
export default LeftNav;
