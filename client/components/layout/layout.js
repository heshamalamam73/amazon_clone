/** @format */

import styles from "./layout.module.css";
import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
// import PublicIcon from '@material-ui/icons/Public';

function Layout({ children, title = "Ilmondo" }) {
  const handleHideSideBar = (e) => {
    e.preventDefault();
    const side_bar = document.getElementById("side-bar");
    side_bar.style.marginLeft = "-280px";
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title} </title>
      </Head>
      <Sidebar />
      <Header />
      <div className={styles.main} onClick={handleHideSideBar}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
