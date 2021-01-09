import styles from './Offerta.module.css'


function Offerta(props) {
    return (
        <div className={styles.flex_box}>
            <div className={styles.flex_head}>{props.title}</div>
            <div className={styles.display_flex_auto}>
                <div className={styles.img_box}> <img src="ic2.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic3.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic5.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic6.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic5.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic7.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic1.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic2.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic2.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic2.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic2.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic2.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic2.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic2.jpg" alt="" /></div>
                <div className={styles.img_box}><img src="ic2.jpg" alt="" /></div>
            </div>
        </div>

    )
}
export default Offerta;