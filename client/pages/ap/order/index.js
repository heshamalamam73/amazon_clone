import Layout from '../../../components/layout/layout';
import styles from './Order.module.css';
import Link from 'next/link'
import Same from '../../../components/same/Same';


function Order(props) {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.head_link}>
                    <div className={styles.top_link}>                    <a > <Link href='/account'>il mio account </Link></a> / i miei ordini
                    </div>

                </div>
                <div className={styles.grid_head}>
                    <div className={styles.title}>I miei Ordini</div>
                    <div className={styles.search_bar}>
                        <div className={styles.form_item} >
                            <input type="text" name="search" id="search" placeholder='recirca oedini ' />
                        </div>
                        <div className={styles.form_item}>
                            <button>Ricerca ordini</button>
                        </div>
                    </div>
                </div>
                <div className={styles.flex_head}>
                    <div>Ordini</div>
                    <div>Compra di nouvo</div>
                    <div>Ordinin in Corso</div>
                    <div>ordini cancellati</div>
                </div>
                <div className={styles.filter}>
                    <div className={styles.filter_item}>
                        3 ordinin effettuati </div>
                    <div className={styles.filter_item}>
                        <select name="ordini" id="ordini">
                            <option value="3">ultimi 3 mesi</option>
                            <option value="2020">nel anno 2020</option>
                            <option value="2021">nel anno 2021</option>


                        </select>
                    </div>


                </div>
                <div className={styles.grid_2}>
                    <div className={styles.orders}>
                        <div className={styles.order_item}>
                            <div className={styles.order_item_head}>
                                <div className={styles.grid_item}>ORDINE EFFETTUATO IL:
<span className={styles.blu}>3 gennaio 2021</span></div>
                                <div className={styles.grid_item}>
                                    TOTALE
                                    <span className={styles.blu}> EUR 12,99</span>
                                </div>
                                <div className={styles.grid_item}>
                                    INVIA A
                                   <span className={styles.blu}> mahmoud hassan hamed okily</span>
                                </div>
                                <div className={styles.grid_item}>
                                    ORDINE # <span className={styles.blu}> 402-1436974-5860323</span>
                                </div>

                            </div>
                            <div className={styles.order_item_body}>
                                <div className={styles.grid_2_body}>
                                    <div className={styles.order_details}>
                                        <div className={styles.ship_date}>Consegnato: <span className={styles.blu}>ieri</span></div>
                                        <div className={styles.ship_status}>Il pacco è stato consegnato presso il domicilio selezionato
                                    </div>
                                        <div className={styles.product}>
                                            <div>
                                                <img src="https://images-eu.ssl-images-amazon.com/images/I/41-fcQL%2B7NL._SY90_.jpg" alt="" />
                                            </div>
                                            <div>
                                                <div className={styles.product_title} >
                                                    Mpow【Versione AGGIORNATA Supporto Smartphone per Auto Culla Regolabile per Cruscotto e Parabrezza, Porta Cellulare per Molti Smartphone e Dispo
                                                </div>
                                                <div>
                                                    Venduto da: <span className={styles.blu}>SJH EU LTD</span>
                                                </div>
                                                <div>
                                                    Idoneo al reso fino al 04 feb 2021
                                                </div>
                                                <div className={styles.product_price}>
                                                    EUR 12,99
                                                </div>
                                                <div>
                                                    <button className={styles.new}>Compralo di nuovo </button>
                                                    <button>Vedi il tuo aricolo</button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className={styles.order_action}>
                                        <div><button>Traccia il mio pacco</button></div>
                                        <div><button>Traccia il mio pacco</button></div>
                                        <div><button>Traccia il mio pacco</button></div>

                                    </div>

                                </div>

                            </div>
                            <div className={styles.order_footer}>
                                Archivia ordine
                            </div>

                        </div>
                    </div>
                    <div>
                        <Same title="Acquistalo di nuovo" />
                    </div>
                </div>
            </div>
        </Layout>
    )

}



export default Order;