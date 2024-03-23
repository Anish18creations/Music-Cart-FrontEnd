import React from 'react';
import styles from './OrderConfirm.module.css';
import signupimg from '../../assets/images/signupimg.png';
import confetti from '../../assets/images/confetti.png';
import { useNavigate } from 'react-router-dom';

export default function OrderConfirm() {

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.navbar}>
      <div className={styles.signupbgimg}>
        <img src={signupimg} className={styles.music} alt='' />
        <div className={styles.title}>Musicart</div>
      </div>
      </div>
      <div className={styles.signupbgimg2}>
        <img src={signupimg} className={styles.music2} alt='' />
        <div className={styles.title2}>Musicart</div>
      </div>
      <div className={styles.container}>
        <img src={confetti} className={styles.confetti} alt='' />
        <div className={styles.success}>Order is placed successfully!</div>
        
          <div className={styles.confirm2}>You  will be receiving a confirmation email with</div>
          <div className={styles.confirm3}>order details</div>
        
        <div className={styles.confirm}>You  will be receiving a confirmation email with order details</div>
        <div className={styles.home} onClick={()=>{navigate('/')}}>Go back to Home page</div>
      </div>
      <div className={styles.bottom}>Musicart | All rights reserved</div>
    </>
  )
}
