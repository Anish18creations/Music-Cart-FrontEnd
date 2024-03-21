import React from 'react';
import styles from './Home.module.css';
import phonecall from '../../assets/images/phonecall.png';
import signupimg from '../../assets/images/signupimg.png';
import bgimage from '../../assets/images/bgimage.png';
import search from '../../assets/images/search.png';
import gridview from '../../assets/images/gridview.png';
import listview from '../../assets/images/listview.png';

export default function Home() {
  return (
    <>
      <div className={styles.navbar}>
        <div style={{ display: 'flex' }}>
          <img src={phonecall} alt='' className={styles.phonecall} />
          <div className={styles.phoneno}>912121131313</div>
          <div className={styles.off}>Get 50% off on selected items</div>
          <div className={styles.line}>|</div>
          <div className={styles.shopnow}>Shop Now</div>
        </div>
      </div>
      <div className={styles.title}>
        <img src={signupimg} className={styles.signupimg} alt='' />
        <div className={styles.musicart}>Musicart</div>
        <div className={styles.home}>Home</div>
      </div>
      <div className={styles.ad}>
        <div className={styles.grab}>
          Grab upto 50% off on
          Selected headphones
        </div>
      </div>
      <img src={bgimage} alt='' className={styles.bgimage} />
      <div className={styles.searchbar}>
        <img src={search} alt='' className={styles.search} />
        <input className={styles.searcharea} type='text' placeholder='Search by Product Name' />
      </div>
      <div className={styles.filteringarea}>
        <img src={gridview} alt='' className={styles.grid} />
        <img src={listview} alt='' className={styles.list} />
        <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRzeZy0fW94mtuxCm2_z0NHZ_FeiD_Domr3_C1WgmzpKMwZO4vxkTr4rwlMXCJ_9cMjOAy5klwEqD_tVJYs4GTvNXYqRo0lfg'
          style={{ marginLeft: '2vw', width: '30vw', height: '50vh' }} alt='' />
      </div>
      <div className={styles.bottom}>Musicart | All rights reserved</div>
    </>
  )
}
