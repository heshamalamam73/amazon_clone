import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'
import Header from '../components/header/Header'
import { useEffect } from 'react'
import Offerta from '../components/offerta/Offerta'
import Sidebar from "../components/sidebar/Sidebar";

export default function Home({ countries }) {


  return (
    <Layout title="Amazon" countries={countries}>
      <div className={styles.main} id="app">
        <div className={styles.first_container}>
          <div className={styles.first_container_head}>
            <div className={styles.first_container_head_text}>
              3 mesi d'uso gratuito
            </div>
            <div className={styles.first_container_head_img}>
              <img src="logo.svg" alt="" />
            </div>
            <div className={styles.first_container_head_p}>
              in seguito a 9.99$ al mese .offerta riservata ai nouvi clienti
            </div>
          </div>

          <div className={styles.display_grid_4_1fr}>
            <div className={styles.box}>
              <div className={styles.box_heading}>
                <div>
                  <img
                    src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/75362182_3833076326718347_3625659778937651200_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=MrP0RvjHguwAX9zpLQ1&_nc_ht=scontent-mxp1-1.xx&oh=4ed46debaf80d08a5e5c39e6d4122745&oe=60101F37"
                    alt=""
                  />
                </div>
                <div>
                  <div>ciao hesham </div>
                  <div>cliente dal 2020</div>
                </div>
              </div>
              <div className={styles.display_grid_2_1fr}>
                <div>
                  <img
                    src="https://images.pexels.com/photos/1346340/pexels-photo-1346340.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/3808249/pexels-photo-3808249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/3808229/pexels-photo-3808229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/5945565/pexels-photo-5945565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                I prodotti preferiti dai nostri clienti
              </div>
              <div className={styles.body}>
                <img
                  src="https://images.pexels.com/photos/5945574/pexels-photo-5945574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>Continua a guardare</div>
              <div className={styles.body}>
                <img
                  src="https://images.pexels.com/photos/3808249/pexels-photo-3808249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>Nuove offerte per te</div>
              <div className={styles.body}>
                <img
                  src="https://images.pexels.com/photos/2364580/pexels-photo-2364580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Scopri le Offerte di fine anno
              </div>
              <div className={styles.body}>
                <img
                  src="https://images.pexels.com/photos/3309886/pexels-photo-3309886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Ancora più offerte con Amazon Outlet
              </div>
              <div className={styles.body}>
                <img
                  src="https://images.pexels.com/photos/4452388/pexels-photo-4452388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>Offerta top</div>
              <div className={styles.body}>
                <img
                  src="https://images.pexels.com/photos/4452510/pexels-photo-4452510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Fino al -50% nel negozio Prime Video
              </div>
              <div className={styles.body}>
                <img
                  src="https://images.pexels.com/photos/4339598/pexels-photo-4339598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
              </div>
              <div>scopri di più</div>
            </div>
          </div>
        </div>
        <div className={styles.display_flex_column}>
          <div className={styles.flex_box}>
            <div className={styles.flex_head}>
              Offerte per categoria con Amazon Outlet
            </div>
            <div className={styles.display_flex_auto}>
              <div className={styles.img_box}>
                {" "}
                <img src="ic2.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic3.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic5.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic6.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic5.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic7.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic2.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic2.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic2.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic2.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic2.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic2.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic2.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic2.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className={styles.flex_box}>
            <div className={styles.flex_head}>
              Correlati agli articoli visualizzati
            </div>
            <div className={styles.display_flex_auto}>
              <div className={styles.img_box}>
                {" "}
                <img src="p1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p2.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p3.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p4.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p5.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p6.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p7.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p8.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p9.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p4.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p5.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p6.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p7.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p8.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="p9.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className={styles.flex_box}>
            <div className={styles.flex_head}>
              Offerte di fine anno per categoria
            </div>
            <div className={styles.display_flex_auto}>
              <div className={styles.img_box}>
                {" "}
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
              <div className={styles.img_box}>
                <img src="ic1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.second_container}>
          <div className={styles.display_grid_4_1fr}>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Le offerte di fine anno per categoria
              </div>
              <div className={styles.display_grid_2_1fr}>
                <div>
                  <img src="c1.jpg" alt="" />
                </div>
                <div>
                  <img src="c2.jpg" alt="" />
                </div>
                <div>
                  <img src="c3.jpg" alt="" />
                </div>
                <div>
                  <img src="c4.jpg" alt="" />
                </div>
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Le offerte di fine anno per categoria
              </div>
              <div className={styles.display_grid_2_1fr}>
                <div>
                  <img src="c6.jpg" alt="" />
                </div>
                <div>
                  <img src="c7.jpg" alt="" />
                </div>
                <div>
                  <img src="c8.jpg" alt="" />
                </div>
                <div>
                  <img src="c9.jpg" alt="" />
                </div>
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                I prodotti preferiti dai nostri clienti
              </div>
              <div className={styles.body}>
                <img src="c5.jpg" alt="" />
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Le offerte di fine anno per categoria
              </div>
              <div className={styles.display_grid_2_1fr}>
                <div>
                  <img src="c10.jpg" alt="" />
                </div>
                <div>
                  <img src="c11.jpg" alt="" />
                </div>
                <div>
                  <img src="c12.jpg" alt="" />
                </div>
                <div>
                  <img src="c13.jpg" alt="" />
                </div>
              </div>
              <div>scopri di più</div>
            </div>
          </div>

          <div className={styles.five_container}>
            <img src="img1.jpg" alt="" />
          </div>
          <div className={styles.display_grid_4_1fr}>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Le offerte di fine anno per categoria
              </div>
              <div className={styles.display_grid_2_1fr}>
                <div>
                  <img src="d1.jpg" alt="" />
                </div>
                <div>
                  <img src="d2.jpg" alt="" />
                </div>
                <div>
                  <img src="d3.jpg" alt="" />
                </div>
                <div>
                  <img src="d4.jpg" alt="" />
                </div>
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Le migliori novità in CD e Vinili
              </div>
              <div className={styles.body}>
                <img src="d6.jpg" alt="" />
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>Continua a guardare</div>
              <div className={styles.body}>
                <img src="d7.jpg" alt="" />
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Scopri il negozio dedicato al gaming
              </div>
              <div className={styles.body}>
                <img src="d8.jpg" alt="" />
              </div>
              <div>scopri di più</div>
            </div>
          </div>
          <div className={styles.display_flex_column}>
            <Offerta
              title="Offerte per categoria con Amazon Outlet"
              images={["ic2.jpg", "ic3.jpg", "ic5.jpg", "ic7.jpg", "ic1.jpg"]}
            />

            <div className={styles.flex_box}>
              <div className={styles.flex_head}>
                Correlati agli articoli visualizzati
              </div>
              <div className={styles.display_flex_auto}>
                <div className={styles.img_box}>
                  {" "}
                  <img src="p1.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p2.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p3.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p4.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p5.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p6.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p7.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p8.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p9.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p4.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p5.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p6.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p7.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p8.jpg" alt="" />
                </div>
                <div className={styles.img_box}>
                  <img src="p9.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.display_grid_4_1fr}>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Centinaia di eBook con Amazon Prime
              </div>
              <div className={styles.display_grid_2_1fr}>
                <div>
                  <img src="e1.jpg" alt="" />
                </div>
                <div>
                  <img src="e2.jpg" alt="" />
                </div>
                <div>
                  <img src="e3.jpg" alt="" />
                </div>
                <div>
                  <img src="e4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Le migliori novità in Libri
              </div>
              <div className={styles.body}>
                <img src="e5.jpg" alt="" />
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Centinaia di eBook con Amazon Prime
              </div>
              <div className={styles.body}>
                <img src="e6.jpg" alt="" />
              </div>
              <div>scopri di più</div>
            </div>
            <div className={styles.box}>
              <div className={styles.box2_heading}>
                Più opportunità per il tuo shopping
              </div>
              <div className={styles.body}>
                <img src="e7.jpg" alt="" />
              </div>
              <div>scopri di più</div>
            </div>
          </div>
        </div>

        {/* <div className={styles.last_container}>

        </div> */}
      </div>
    </Layout>
  );

}
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};