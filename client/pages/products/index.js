import { TableBody } from "@material-ui/core";
import { useState } from "react";
import Layout from "../../components/layout/layout";
import styles from './Online.module.css'
import Link from 'next/link'

function Index({ countries }) {

    return (
        <Layout >
            <div className={styles.online_container}>
                <div className={styles.online_top}>
                    <div className={styles.online_top_img}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/29/Events/2020/EOY_DEALS/XCM_Manual_1296912_1517192_IT_it_eoy_it_deals_it_it_3602398_1500x80_it_IT.jpg" alt="" />
                    </div>
                    <div>
                        <div className={styles.up_head}>
                            Scopri le offerte di tua interesse
                        </div>
                        <section className={styles.online_body}>
                            <div className={styles.online_body_header}>
                                <div>1-50 dei 4646 risultati in Offerte in corso o Offerte terminate   </div>
                                <div>
                                    Ordina per
                                         <select name="" id="">
                                        <option value=""> suggeriti</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.body_grid_2}>
                                <div className={styles.filter_list}>
                                    {countries.map((country) => (
                                        <div>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value={country.region} />
                                            <label htmlFor="vehicle1">{country.region}</label><br />
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.body_grid_4}>

                                    {countries.map((country) => (
                                        <Link href={`products/${country.alpha3Code}`}>
                                            <div className={styles.box}>
                                                <div className={styles.box_img}>
                                                    <img src={country.flag} alt="" />
                                                </div>
                                                <div className={styles.box_body}>
                                                    <div className={styles.price}>
                                                        {country.population} $
                                                </div>
                                                    <div>
                                                        {country.region}
                                                    </div>
                                                    <div>
                                                        Termina tra 2 giorni
                                                </div>
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
                            </div>

                        </section>


                    </div>
                </div>

            </div>
        </Layout>

    )
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
