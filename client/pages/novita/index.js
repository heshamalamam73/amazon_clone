/** @format */
import { useEffect, useState } from "react";
import generateProducts from "../../seeds/products";
import Layout from '../../components/layout/layout'
import styles from './Novita.module.css'
import LeftNav from "../../components/leftnav/LeftNav";
import ProductsList from "../../components/productsList/ProductsList";
function Novita({ countries, title }) {
  const handleChange = function (e) {
    if (e.target.checked) {
      setKeyword(e.target.value.toLowerCase());
    } else {
      setKeyword("");
    }
  };
  return (
    <Layout countries={countries} >
      <div className={styles.container}>
        <div className={styles.head_titles}>
          <div className={styles.head_item}>Bestseller</div>
          <div className={styles.head_item}>Le novita piu interssanti</div>
          <div className={styles.head_item}>i prodotti del momento</div>
          <div className={styles.head_item}> i piu desiderati</div>
        </div>
        <div className={styles.current_page_title}>
          <div className={styles.h1}>Le novita piu interssanti di amazon </div>
          <div className={styles.h2}>
            le novita piu venduta , aggiornato ogni ora{" "}
          </div>
        </div>
        <div className={styles.body_grid_2}>
          <div className={styles.body_grid_2}>
            <LeftNav countries={countries} handleChange={handleChange} />
          </div>
          <ProductsList products={countries} />
        </div>
      </div>
    </Layout>
  );
}
// will edit this and pass come props 
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};
export default Novita;
