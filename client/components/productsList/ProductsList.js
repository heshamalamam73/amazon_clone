/** @format */
import styles from "./ProductsList.module.css";
import Link from "next/link";
function ProductsList({ products }) {
  return (
    <div className={styles.body_grid_4}>
      {products.map((country) => (
        <Link href={`products/${country.alpha3Code}`}>
          <div className={styles.box}>
            <div className={styles.box_img}>
              <img src={country.flag} alt="" />
            </div>
            <div className={styles.box_body}>
              <div className={styles.price}>{country.population} $</div>
              <div>{country.region}</div>
              <div>Termina tra 2 giorni</div>
              <div className={styles.offer}>
                Offerte su prodotti per la tua Casa e la tua Cucina!
              </div>
            </div>
            <div className={styles.button_div}>
              <button>Scopri </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default ProductsList;
