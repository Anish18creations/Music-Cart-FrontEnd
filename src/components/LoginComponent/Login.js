import React from 'react';
import styles from './Login.module.css';
import signupimg from '../../assets/images/signupimg.png';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  return (
    <>
      <div className={styles.signupbgimg}>
        <img src={signupimg} alt='' className={styles.img} />
        <div className={styles.musicart}>Musicart</div>
      </div>
      <div className={styles.container}>
        <div className={styles.containertitle}>Sign in </div>
        <div className={styles.yourname}>Enter your email or mobile number</div>
        <input type='text' spellCheck={false} required />
        <div className={styles.yourname}>Password</div>
        <input type='password' spellCheck={false} required />
        <div className={styles.continue}>Continue</div><Toaster />
        <div className={styles.agree}>
          By continuing, you agree to Musicart privacy notice and conditions of use.
        </div>
      </div>
      <div className={styles.new}>
        <div className={styles.line}></div>
        <div className={styles.newmusicart}>New to Musicart?</div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.acc} onClick={() => { navigate('/signup') }}>Create your Musicart account</div>
      <div className={styles.bottom}>Musicart | All rights reserved</div>
    </>
  )
}
