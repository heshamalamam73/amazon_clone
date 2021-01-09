import styles from './header.module.css'
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useState } from 'react';
import { Link } from '@material-ui/core';
function Header() {
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    return (
        <div>
            <div className={styles.header}>
                <Link href='/'>
                    <div className={styles.logo}>

                        <img src="../logo.svg" alt="" />
                    </div>
                </Link>

                <div>
                    invio a mahmoud cantu 22063
          </div>
                <div className={styles.header_input}>
                    <select className={styles.select}>
                        <option value="">tutte le category </option>
                        <option value="">Option 1 </option>
                        <option value="">Option 1 </option>
                        <option value="">Option 1 </option>
                        <option value="">Option 1 </option>
                        <option value="">Option 1 </option>
                    </select>
                    <input type="text" name="" id="" placeholder="Search" onChange={handleChange} id="input" value={searchValue} />
                    <button>
                        <SearchIcon />
                    </button>
                </div>
                <div className={styles.nav_item}>
                    <a > <Link href='/ap/login'> Log in</Link></a>
                </div>
                <div className={styles.nav_item}>
                    <a > <Link href='/ap/order'> resi e ordini </Link></a>


                </div>
                <div className={styles.nav_item}>

                    <a > <Link href='/ap/cart'>  <ShoppingCartIcon />
                carrello
</Link></a>


                </div>
            </div>
            <div className={styles.top_nav}>
                <div className={styles.top_button}>
                    <DehazeIcon />
                    Tutte
            </div>
                <div className={styles.item}>
                    <Link href='/products'>tutte le prodotte </Link>
                </div>
                <div>
                    Novità
            </div>
                <div>
                    bestseller
            </div>
                <div>
                    AmazonBasics
            </div>
                <div>
                    amazon.it
            </div>
                <div>
                    Servizio Clienti
            </div>
                <div>
                    idee regalo
            </div>
                <div>
                    aquista di nuovo
            </div>
                <div>Offerte</div>
                <div>
                    Libri
            </div>
                <div>
                    elettronica
            </div>

            </div>
        </div>

    )
}




export default Header;

