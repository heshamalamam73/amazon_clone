/** @format */

import styles from "./layout.module.css";
import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import SignList from "../signList/SignList";
import SearchList from "../searchList/SearchList";
import Shipping from "../shipping/Shipping";
// import PublicIcon from '@material-ui/icons/Public';

function Layout({ children, title = "Ilmondo", countries }) {
  const handleHideSideBar = (e) => {
    e.preventDefault();
    const app = document.getElementById("allapp");
    const side_bar = document.getElementById("side-bar");
    side_bar.style.marginLeft = "-280px";
    app.classList.remove("disactive");
  };

  return (
    <>
      <SignList />
      <Sidebar />
      <SearchList />
      <Shipping />

      <div className={styles.container} id="allapp">
        <Head>
          <title>{title} </title>
        </Head>
        <Header />
        <div className={styles.main} onClick={handleHideSideBar}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
