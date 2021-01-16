import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import styles from './Online.module.css'
import Link from 'next/link'
import LeftNav from "../../components/leftnav/LeftNav";
import ProductsList from "../../components/productsList/ProductsList";
import SearchList from "../../components/searchList/SearchList";

function Index({ countries, title }) {
  const [keyword, setKeyword] = useState("");
  const filterdCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  useEffect(() => {
    const input = document.getElementById("input");
    input.addEventListener("input", function () {
      setKeyword(this.value.toLowerCase());
    });

  }, []);
  const handleChange = function (e) {
    if (e.target.checked) {
          setKeyword(e.target.value.toLowerCase());

    } else {
      setKeyword("")
    }

      
    };;
  return (
    <Layout countries={countries}>
      <div className={styles.online_container}>

        <div className={styles.online_top}>
          <div className={styles.online_top_img}>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/29/Events/2020/EOY_DEALS/XCM_Manual_1296912_1517192_IT_it_eoy_it_deals_it_it_3602398_1500x80_it_IT.jpg"
              alt=""
            />
          </div>
          <div>
            <div className={styles.up_head}>
              Scopri le offerte di tua interesse
            </div>
            <section className={styles.online_body}>
              <div className={styles.online_body_header}>
                <div>
                  1-50 dei 4646 risultati in Offerte in corso o Offerte
                  terminate{" "}
                </div>
                <div>
                  Ordina per
                  <select name="" id="">
                    <option value=""> suggeriti</option>
                  </select>
                </div>
              </div>
              <div className={styles.body_grid_2}>
                <div className={styles.body_grid_2}>
                  <LeftNav countries={countries} handleChange={handleChange} />
                </div>
                <ProductsList products={filterdCountries} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all")
    const countries = await res.json();
    return {
        props: {
            countries
        }
    }
}

export default Index;
