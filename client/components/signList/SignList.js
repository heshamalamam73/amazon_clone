/** @format */

import styles from "./SignList.module.css";
import Link from "next/link";
function SignList() {
  return (
    <div className={styles.container} id="signList">
      <div className={styles.head}>
        <button>Accedi</button>
        <div className={styles.new}>
          Nuovo cliente ? <Link href="/ap/login">Inizia qui</Link>
        </div>
      </div>
      <div className={styles.grid_2}>
        <div className={styles.left_list}>
          <div className={styles.list_title}>Le tue liste</div>
          <ul>
            <li>
              <a>
                <Link href="/newlist">Crea una lista </Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/newlist">Crea una lista </Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/newlist">Crea una lista </Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/newlist">Crea una lista </Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/newlist">Crea una lista </Link>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.right_list}>
          <div className={styles.list_title}>il mio account</div>
          <ul>
            <li>
              <a>
                <Link href="/newlist">Crea una lista </Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/newlist">Crea una lista </Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/newlist">Crea una lista </Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/newlist">Crea una lista </Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/newlist">Crea una lista </Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/newlist">Crea una lista </Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/newlist">Crea una lista </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SignList;
