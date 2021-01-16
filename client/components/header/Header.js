import styles from "./header.module.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "../searchbar/SearchBar";

function Header() {
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    const input = document.getElementById("input");
    input.addEventListener("input", function () {
      setKeyword(this.value.toLowerCase());
    });
  }, []);
  const handleLeftNaf = (e) => {
    e.preventDefault();
    let app = document.getElementById("app");
    const side_bar = document.getElementById("side-bar");
    console.log(side_bar);
    side_bar.style.margin = "0px";
  };

  return (
    <div>
      <div className={styles.header}>
        <Link href="/">
          <div className={styles.logo}>
            <img src="../logo.svg" alt="" />
          </div>
        </Link>

        <div>invio a mahmoud cantu 22063</div>
        <div className={styles.header_input}>
          <select className={styles.select}>
            <option value="">tutte le category </option>
            <option value="">Option 1 </option>
            <option value="">Option 1 </option>
            <option value="">Option 1 </option>
            <option value="">Option 1 </option>
            <option value="">Option 1 </option>
          </select>
          <SearchBar />

       
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className={styles.nav_item}>
          <a>
            {" "}
            <Link href="/ap/login"> Log in</Link>
          </a>
        </div>
        <div className={styles.nav_item}>
          <a>
            {" "}
            <Link href="/ap/order"> resi e ordini </Link>
          </a>
        </div>
        <div className={styles.nav_item}>
          {" "}
          <Link href="/ap/cart">
            <a>
              <ShoppingCartIcon />
              carrello
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.top_nav}>
        <div className={styles.top_button} onClick={handleLeftNaf}>
          <DehazeIcon />
          Tutte
        </div>
        <div className={styles.item}>
          <Link href="/products">tutte le prodotte </Link>
        </div>
        <div>
          <Link href="/novita">Novità </Link>
        </div>
        <div>bestseller</div>
        <div>AmazonBasics</div>
        <div>amazon.it</div>
        <div>Servizio Clienti</div>
        <div>idee regalo</div>
        <div>aquista di nuovo</div>
        <div>Offerte</div>
        <div>Libri</div>
        <div>elettronica</div>
      </div>
    </div>
  );
}

export default Header;
