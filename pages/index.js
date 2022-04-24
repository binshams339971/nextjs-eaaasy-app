import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import brandService from '../service/BrandService'
import productService from '../service/ProductService'
import Carousel from 'react-elastic-carousel';

export default function Home() {
  let [product, setProduct] = useState([]);
  let [brand, setBrand] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    brandService.getBrands({ orderBy: 'name', orderAsc: '1' }).then((brands) => {
      if (brands.status === 'success') {
        setBrand(brands?.data);
        setLoading(false);
      } else {
        console.log("Failed");
      }
    }).catch((err) => {
      console.log(err);
    });
    productService.getProducts().then((products) => {
      if (products.status === 'success') {
        setProduct(products?.data);
        setLoading(false);
      } else {
        console.log("Failed");
      }
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 760, itemsToShow: 3 },
    { width: 900, itemsToShow: 5 },
  ];
  return (
    <div className='container'>
      {!loading ?
        brand.map((b, index) =>
          <>
            <div className='mt-5' key={b.id} >
              <h3 style={{ marginLeft: "5%", cursor: "pointer" }} onClick={() => brandClink(b.id)}>{b.name}</h3>
              <Carousel breakPoints={breakPoints}>
                {product?.map((p) =>
                  b.id === p.brand_id &&
                  <Link href={`/details/${p.identifier}`} className={styles.cardLink} key={p.id}>
                    <a className={styles.cardLink}>
                      <div className={styles.cards} key={p.id}>
                        {
                          p.video_thumbnail_link ?
                            <img className={styles.cardImg} src={p.video_thumbnail_link} alt="abc" /> :
                            <img className={styles.cardImg} src={`https://mvp-api.deepchainlabs.com/${p.video_thumbnail_src}`} alt="abc" />
                        }

                        <div className={styles.info}>
                          <span>{p.name}</span><br />
                          <Link href={`/details/${p.identifier}`} className={styles.viewNow}>
                            <a className={styles.viewNow}>
                              View Now
                              <img src="https://mvp.deepchainlabs.com/static/media/play.405665536a453edb772badf4ecf92ecb.svg" className={styles.playIcon} alt="abc" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </a>
                  </Link>
                )
                }
              </Carousel >
            </div>
          </>
        )
        : <h3>Loading...</h3>}
    </div>
  )
}
