import styles from './Cart.module.css';
import Layout from '../../../components/layout/layout'
import { useState } from 'react';
import Same from '../../../components/same/Same';



function Cart(props) {
    const [empaty, setEmpaty] = useState(false);


    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.grid_2}>
                    <div>
                        {empaty ? (
                            <div className={styles.empaty_message}>
                                <div className={styles.head}>Il tuo carrello Amazon è vuoto.
                                            </div>
                                <div>
                                    Il tuo carrello aspetta solo di essere riempito. Non deluderlo: riempilo di generi alimentari, capi di abbigliamento, articoli per la casa, prodotti di elettronica e molto altro ancora.
                                    Continua a fare acquisti sul sito web Amazon.it, scopri la nostra sezione Offerte o visita la tua Lista Desideri.
                                            </div>


                            </div>

                        ) : (
                                <div className={styles.cart_container}>
                                    <div className={styles.cart_head} >
                                        Carrello
                                    </div>
                                    <div className={styles.flex_div}>
                                        <div>Deseleziona tutti gli articoli
                                        </div>
                                        <div>Prezzo</div>
                                    </div>
                                    <div className={styles.cart_items}>
                                        <div className={styles.cart_item}>
                                            <div className={styles.cart_item_img}>
                                                <img src="https://m.media-amazon.com/images/I/81e3qQbYvbL._AC_AA180_.jpg" alt="" />
                                            </div>
                                            <div className={styles.cart_item_details}>
                                                <div className={styles.flex_head}>
                                                    <div className={styles.cart_item_title}>
                                                        adidas Core 18 HDE, Felpa con Cappuccio Uomo, Blu (Dark Blue/White), M
                                                    </div>
                                                    <div className={styles.cart_item_price}>
                                                        33,77 €
                                                    </div>
                                                </div>
                                                <div className={styles.item_rating}>
                                                    il #1 più venduto in Felpe con cappuccio da uomo
                                                </div>
                                                <div className={styles.item_price}>Disponibilità: solo 3 -- ordina subito (ulteriori in arrivo).</div>
                                                <div>Spedizione senza costi aggiuntivi con Prime Dettagli</div>
                                                <div>
                                                    Regala questo articolo Regala questo articoloUlteriori informazioni
                                                </div>
                                                <div className={styles.grid_4}>
                                                    <div>
                                                        <label htmlFor="qty">Q.tà</label>
                                                        <select name="qty" id="qty">
                                                            <option value="1">1</option>
                                                        </select>

                                                    </div>
                                                    <div>
                                                        Rimuovi
                                                    </div>
                                                    <div>
                                                        Salva per dopo
                                                    </div>
                                                    <div>
                                                        Visualizza altri articoli similli
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className={styles.total}>
                                        Totale provvisorio (1 articolo): 33,77 €

                                    </div>

                                </div>
                            )}

                    </div>
                    <div className={styles.right_side}>
                        {!empaty && (
                            <div className={styles.action}>
                                Totale provvisorio (1 articolo): 33,77 €
                                <div className={styles.btn}>
                                    <button>Proccedi il ordene </button>
                                </div>


                            </div>
                        )}
                        <div>
                            <Same title="Esplora più articoli" />

                        </div>

                    </div>
                </div>


            </div>
        </Layout>

    )
}
export default Cart;