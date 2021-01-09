import Link from 'next/link'
import styles from './Signup.module.css'
function SignUp() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href='/'>
                    <img src="../Amazon_logo.svg" alt="" />

                </Link>

            </div>
            <div>
                <form className={styles.form}>
                    <div className={styles.form_head}>
                        Accedi
                </div>
                    <div className={styles.form_input}>
                        <label htmlFor="name">Il Tuo nome</label>
                        <input type="text" name="name" id="email" />
                    </div>
                    <div className={styles.form_input}>
                        <label htmlFor="email">Indrezzo e-mail</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className={styles.form_input}>
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className={styles.form_input}>
                        <button className={styles.btn}>Continua</button>
                    </div>
                    <div className={styles.form_input}>
                        Accedendo al tuo account dichiari di aver letto e accetti le nostre Condizioni generali di uso e vendita. Prendi visione della nostra Informativa sulla privacy, della nostra Informativa sui Cookie e della nostra Informativa sulla Pubblicità definita in base agli interessi.
                </div>
                    <div className={styles.form_input}>
                        <a >
                            <Link href='/auto'> Hai bisgno di auto</Link>
                        </a>
                    </div>

                </form>
                <div className={styles.new}>
                    <div className={styles.form_input}>
                        Disponi già di un account  ?
            </div>
                    <div className={styles.form_input}>
                        <button > <Link href='/ap/login'>Accedi</Link> </button>
                    </div>
                </div>

            </div>
            <div className={styles.footer}>
                <div className={styles.flex}>
                    <ul>
                        <li>Condizioni d'uso </li>
                        <li>Informativa sulla privacy </li>
                        <li>Aiuto</li>
                        <li>Informativa sul Cookie</li>
                        <li>Informativa sulla Pubblicità</li>
                    </ul>
                </div>
                <div className={styles.copyright}>
                    2010-2020, Amazon , inc.o socità affiliate
            </div>

            </div>

        </div>
    )




}

export default SignUp;