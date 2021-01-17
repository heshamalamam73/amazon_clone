/** @format */

import { useEffect } from "react";
import styles from "./Shipping.module.css";

function Shipping() {
  useEffect(() => {
    const btn = document.getElementById("address");
    btn.addEventListener("mouseenter", function () {
      document.getElementById("shipAdd").style.display = "block";
      document.getElementById("allapp").classList.add("disactive");
    });
    document.getElementById("allapp").addEventListener("click", function () {
      document.getElementById("shipAdd").style.display = "none";
      document.getElementById("allapp").classList.remove("disactive");
    });
  });

  return (
    <div className={styles.container} id="shipAdd">
      <div className={styles.head}>choose your location</div>
      <div className={styles.body}>
        <div className={styles.sm}>
          Delivery options and delivery speeds may vary for different locations
        </div>
        <div className={styles.login}>
          <button>Accedi per vedere i tuoi indirizzi</button>
        </div>
        <div className={styles.sm}> oppure inserisci un Cap italiano</div>
      </div>
      <form className={styles.form}>
        <input type="number" name="cap" id="" />
        <button>conferma</button>
      </form>
      <div className={styles.sm}>oppure</div>
      <select name="" id="" className={styles.select}>
        <option value="#">Spedisci all'estero</option>
      </select>
    </div>
  );
}
export default Shipping;
