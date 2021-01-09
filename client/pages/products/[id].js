import { useEffect, useState } from 'react';
import Layout from '../../components/layout/layout'
import styles from './product.module.css'
import Link from 'next/link'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
const getCountry = async (id) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
    const country = await res.json();
    return country;
}

function Product({ country }) {
    const [borders, setBorders] = useState([]);
    const getBorders = async () => {
        const borders = await Promise.all(country.borders.map((border) => getCountry(border)));
        setBorders(borders)

    }
    useEffect(() => {
        getBorders();

    }, [])
    return (
        <Layout>
            <div className={styles.container}>

                <div className={styles.back_link}>
                    <a >
                        <Link href='/'> Back </Link>
                    </a>

                </div>


                <div className={styles.product_container}>
                    <div className={styles.grid_3}>
                        <div className={styles.grid_item}>
                            <div className={styles.img}>
                                <div className={styles.small_img}>
                                    <div>                                    <img src={country.flag} alt="" />
                                    </div>
                                    <div>                                    <img src={country.flag} alt="" />
                                    </div>
                                    <div>                                    <img src={country.flag} alt="" />
                                    </div>
                                    <div>                                    <img src={country.flag} alt="" />
                                    </div>
                                    <div>                                    <img src={country.flag} alt="" />
                                    </div>
                                    <div>                                    <img src={country.flag} alt="" />
                                    </div>

                                </div>

                                <div className={styles.main_img}>                                <img src={country.flag} alt="" />
                                </div>

                            </div>

                        </div>
                        <div className={styles.grid_item}>
                            <div className={styles.product_title}>
                                Braun Silk-épil 9 9-980 Epilatore Donna per un'Epilazione Duratura, Bikini Styler, Testina Radente e Rifinitore, Spazzole Esfolianti, Cappuccio Massaggiante ad Alta Frequenza, Idea Regalo Natale
                            </div>
                            <div className={styles.offerta}>
                                <div className={styles.label}>Prezzo consigliato:<div className={styles.price}>199.00$</div>	</div>
                                <div className={styles.prime}>Prime</div>

                                <div className={styles.label}>
                                    <div>
                                        Risparmi:	69,01 € (35%)
                                    </div>
                                </div>

                            </div>
                            <div className={styles.details}>
                            </div>
                            <div className={styles.product_info}>
                                <div className={styles.head}>Informazioni su questo articolo
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            [ DESIGN A GANCIO ] UGREEN Supporto smartphone per auto è diverso dagli altri supporti sul mercato. Il gancio speciale ed elaborato è perfettamente adatto alla maggior parte delle griglie di ventilazione ed è più sicuro, più forte del morsetto, del magnete o della ventosa.

                                        </li>
                                        <li>
                                            [ PROTAZIONE IN SILICONE ] Tutti i punti di contatto del supporto gravità per telefono sulla bocchetta d’aria aggiungono cuscini spessi realizzati in silicone. Il silicone graduato sulle braccia del supporto aiuta a ridurre l'attrito, svolgendo un ruolo antiscivolo e di assorbimento degli urti volti. Il punto di contatto con l'automobile è inoltre ricoperto da silicone ispessito.

                                        </li>
                                        <li>
                                            [ ULTRA STABILE & SENZA RUMORE ] Il design del collegamento gravità consente di bloccare e rilasciare facilmente il telefono con una sola mano. L'esclusiva struttura del braccio a discesa di tipo incrociato può abbassare il baricentro del telefono e fornire una ultra stabilità senza rumori anomali generati durante l'uso.

                                        </li>
                                        <li>[ ANGOLO DI VISIONE REGOLABILE ] La testa a sfera rotante di UGREEN porta per auto offre più angoli di rotazione in modo da poter adattare il telefono ad un angolo di visione ottimale e utilizzare la navigazione in modo più semplice e conveniente. NOTA: questa porta cellulare per auto NON supporta orizzontale.
</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className={styles.grid_item, styles.action}>
                            <div className={styles.price}>
                                129.99$
                            </div>
                            <div className={styles.prime}>Prime</div>
                            <div>
                                Consegna senza costi aggiuntivi:
                                     <div>Consegna senza costi aggiuntivi: lunedì, 4 gen
                                </div>

                            </div>
                            <div className={styles.status}>
                                Disponibilità immediata.
                            </div>
                            <div className={styles.qty}>
                                <label htmlFor="qty">Quantità : </label>
                                <select name="" id="">
                                    <option value="1">1</option>
                                    <option value="1">2</option>
                                </select>
                            </div>

                            <div className={styles.btn}>
                                <button>
                                    <div className={styles.icon}><ShoppingCartIcon fontSize="large" /></div>
                                    Aggiungi al carrello</button>
                                <button>
                                    <div className={styles.icon}>     <AssignmentReturnedIcon fontSize="large" /> </div>
                               Acquista ora</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </Layout >

    )
}
export default Product;
export const getStaticPaths = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all")
    const countries = await res.json();
    const paths = countries.map((country) => ({
        params: { id: country.alpha3Code },
    }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {

    const country = await getCountry(params.id);

    return {
        props: {
            country,
        }
    }
}