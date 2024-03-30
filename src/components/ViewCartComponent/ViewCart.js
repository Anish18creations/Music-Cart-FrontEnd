import React from 'react';
import styles from './ViewCart.module.css';
import phonecall from '../../assets/images/phonecall.png';
import toast, { Toaster } from 'react-hot-toast';
import signupimg from '../../assets/images/signupimg.png';
import whitecart from '../../assets/images/whitecart.png';
import blackcart from '../../assets/images/blackcart.png';
import { useNavigate } from 'react-router-dom';

export default function ViewCart() {

  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.navbar}>
        <div style={{ display: 'flex' }}>
          <img src={phonecall} alt='' className={styles.phonecall} />
          <div className={styles.phoneno}>912121131313</div>
          <div className={styles.off}>Get 50% off on selected items</div>
          <div className={styles.line}>|</div>
          <div className={styles.shopnow}>Shop Now</div>
          {localStorage.getItem('token') ?
            <>
              <div className={styles.logout} onClick={() => {/*localStorage.clear()*/ }}>Logout</div><Toaster />
            </>
            :
            ""
          }
        </div>
      </div>
      <div className={styles.title}>
        <img src={signupimg} className={styles.signupimg} alt='' />
        <div className={styles.musicart}>Musicart</div>
        <div className={styles.home} onClick={() => { navigate('/') }}>Home/ View Cart</div>
        {
          localStorage.getItem('token') ?
            <>
              <div className={styles.cart}>
                <img src={whitecart} className={styles.whitecart} alt='' />
                <div className={styles.viewcart}>View Cart&ensp;</div>
              </div>
            </>
            :
            ""
        }
      </div>
      <div className={styles.back} onClick={() => { navigate('/') }}>Back to products</div>
      <div className={styles.display}>
        <img src={blackcart} alt='' className={styles.blackcart} />
        <div className={styles.mycart}>My Cart</div>
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          <hr className={styles.firsthorizontalline}></hr>
        </div>
        <div style={{ marginLeft: '2vw', marginTop: '1vh' }}>
          <div className={styles.pricedetails}>PRICE DETAILS</div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className={styles.mrp}>Total MRP</div>
        <div className={styles.mrp} style={{ marginLeft: '10vw' }}>₹3500</div>
      </div>
      <div style={{ display: 'flex', marginTop: '1vh' }}>
        <div className={styles.mrp}>Discount on MRP</div>
        <div className={styles.mrp} style={{ marginLeft: '6.1vw' }}>₹0</div>
      </div>
      <div style={{ display: 'flex', marginTop: '1vh' }}>
        <div className={styles.mrp}>Convenience Fee</div>
        <div className={styles.mrp} style={{ marginLeft: '6.3vw' }}>₹45</div>
      </div>
      <div style={{ display: 'flex', marginTop: '13vh' }}>
        <div className={styles.mrp} style={{ fontWeight: '500', fontSize: '1.3rem' }}>Total Amount</div>
        <div className={styles.mrp} style={{ marginLeft: '7vw', marginTop: '1.2vh' }}>₹3545</div>
      </div>
      <div className={styles.placeorder} onClick={() => { navigate('/placeorder') }}>PLACE ORDER</div>
      <div className={styles.bottom}>Musicart | All rights reserved</div>
    </div>
  )
}
