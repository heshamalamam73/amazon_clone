import styles from './layout.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../header/Header';
import Footer from '../footer/Footer';
// import PublicIcon from '@material-ui/icons/Public';


const Layout = ({ children, title = "Ilmondo" }) => (
    <div className={styles.container}>
        <Head>
            <title>{title} </title>
        </Head>
        <Header />
        <div className={styles.main}>        {children}</div>
        <Footer />

    </div>
)


export default Layout;