import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import phonecall from '../../assets/images/phonecall.png';
import signupimg from '../../assets/images/signupimg.png';
import bgimage from '../../assets/images/bgimage.png';
import search from '../../assets/images/search.png';
import gridview from '../../assets/images/gridview.png';
import listview from '../../assets/images/listview.png';
import whitecart from '../../assets/images/whitecart.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();
  const [init , setInit] = useState();

  useEffect(()=>{

    if(localStorage.getItem('username')){
      setInit(localStorage.getItem('username').split(" ").map((word) => word[0]).join(''));
    }
    
  },[]);

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
        <div className={styles.home} onClick={()=>{navigate('/')}}>Home</div>
        {localStorage.getItem('token') ?
        <>
         <div className={styles.home} onClick={()=>{navigate('/invoice')}}>Invoice</div>
         <div className={styles.cart}>
          <img src={whitecart} className={styles.whitecart} alt='' />
          <div className={styles.viewcart}>View Cart&ensp;0</div>
         </div>
         <div className={styles.userinfo}>
            <div className={styles.initials}>{init}</div>
         </div>
         <div className={styles.usermenu}>

         </div>
         </> 
         :
         ""}
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
          
      </div>
      <div className={styles.bottom}>Musicart | All rights reserved</div>
    </>
  )
}
