import styles from './Same.module.css';

function Same(props) {
    return (
        <div className={styles.same}>
            <div>
                {props.title}
            </div>
            <div className={styles.item}>
                <div className={styles.item_img}>
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/519wLX%2B2KLL._AC_UL100_SR100,100_.jpg" alt="" />
                </div>
                <div >
                    <div className={styles.item_title}>KOOMTOOM 2 pezzi…</div>
                    <div className={styles.item_rating}>rating</div>
                    <div className={styles.item_price}>10,79 € </div>
                    <button>Aggiungi al carrello</button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_img}>
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/81-E7n3S68L._UX300__PJprime-reading,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL100_SR100,100_.jpg" alt="" />
                </div>
                <div >
                    <div className={styles.item_title}>
                        La ragazza della neve
Pam Jenoff</div>
                    <div className={styles.item_rating}>rating  2.007</div>
                    <div className={styles.item_price}>1,79 € </div>
                    <button>Aggiungi al carrello</button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.item_img}>
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/519wLX%2B2KLL._AC_UL100_SR100,100_.jpg" alt="" />
                </div>
                <div >
                    <div className={styles.item_title}>KOOMTOOM 2 pezzi…</div>
                    <div className={styles.item_rating}>rating</div>
                    <div className={styles.item_price}>10,79 € </div>
                    <button>Aggiungi al carrello</button>
                </div>
            </div>
        </div>



    )
}

export default Same;