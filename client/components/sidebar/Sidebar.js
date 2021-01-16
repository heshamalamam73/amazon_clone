/** @format */
import styles from "./Sidebar.module.css";
function Sidebar(props) {
  const handleClose = (e) => {
    e.preventDefault();
    const side_bar = document.getElementById("side-bar");
    side_bar.style.marginLeft = "-280px";
  };
  return (
    <div id="side-bar" className={styles.container}>
      <div className={styles.nav_head}>
        <div>ciao hesham !</div>
        <div>
          <button id="colse-btn" onClick={handleClose}>
            X
          </button>
        </div>
      </div>
      <div className={styles.nav_body}>
        <div className={styles.nav_part}>
          <div>
            <div className={styles.nav_title}>Di Tendenza</div>
            <ul className={styles.first_ul}>
              <li>Bestseller</li>
              <li>Novità</li>
              <li>i prodotti del momento </li>
            </ul>
          </div>
        </div>
        <div className={styles.nav_part}>
          <div>
            <div className={styles.nav_title}>
              dispositivi e contenuti digitali
            </div>
            <ul className={styles.first_ul}>
              <li>Amazon prime vedio</li>
              <li>amazon music</li>
              <li>amazon photos </li>
              <li>exho e alexa </li>
              <li>amazon fire tv </li>
              <li> e-reader e ebook kindle</li>
              <li>tablet fire</li>
              <li>appstore per android</li>
              <li>audiolibri audible</li>
            </ul>
          </div>
        </div>
        <div className={styles.nav_part}>
          <div>
            <div className={styles.nav_title}>programmi e caratteristiche</div>
            <ul className={styles.first_ul}>
              <li>made in italy</li>
              <li>hanmade</li>
              <li>amazon launchpad </li>
              <li>amazon business </li>
              <li>mostra Tutto</li>
              <li> tutto le categorie</li>
            </ul>
          </div>
        </div>
        <div className={styles.nav_part}>
          <div>
            <div className={styles.nav_title}>aiuto e impostazioni</div>
            <ul className={styles.first_ul}>
              <li>il mio account</li>
              <li>servizio clienti</li>
              <li>esc </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
