import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import phonecall from '../../assets/images/phonecall.png';
import signupimg from '../../assets/images/signupimg.png';
import bgimage from '../../assets/images/bgimage.png';
import search from '../../assets/images/search.png';
import gridview from '../../assets/images/gridview.png';
import listview from '../../assets/images/listview.png';
import whitecart from '../../assets/images/whitecart.png';
import feedback from '../../assets/images/feedback.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();
  const [init , setInit] = useState();

  useEffect(()=>{

    if(localStorage.getItem('username')){
      setInit(localStorage.getItem('username').split(" ").map((word) => word[0]).join(''));
    }
    
  },[]);

  const openorclosepopup = (i) => {
    if(document.getElementById(i).style.visibility == 'hidden')
    document.getElementById(i).style.visibility = 'visible';
    else
    document.getElementById(i).style.visibility = 'hidden';
  }

  const setfeedbackchoice = (i) => {
    document.getElementById('choicetype').innerHTML = i;
    document.getElementById('feedbackchoice').style.visibility = 'hidden';
  }

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
         <div className={styles.userinfo} onClick={()=>openorclosepopup('menu')}>
            <div className={styles.initials}>{init}</div>
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
        {localStorage.getItem('token') ?
        <div className={styles.usermenu} id='menu' style={{visibility:'hidden'}}>
          <div className={styles.name}>{localStorage.getItem('username')}</div>
          <div className={styles.line2}></div>
          <div className={styles.logout}>Logout</div>
        </div>
        :
        ""
        }
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
      {localStorage.getItem('token') ?
      <>
      <div className={styles.feedbackcontainer} id='feedback-container' style={{visibility:'hidden'}}>
        <div className={styles.typeoffeedback}>Type of feedback</div>
        <div className={styles.typeselect} onClick={()=>openorclosepopup('feedbackchoice')} >
        <div id='choicetype' style={{width:'8vw'}}>Choose the type</div>
        <div style={{marginLeft:'3.5vw'}}>v</div>
        </div>
         <div className={styles.options} style={{visibility:'hidden'}} id='feedbackchoice'>
          <div style={{paddingLeft:'0.5vw' , paddingTop:'1vh'}} onClick={()=>setfeedbackchoice('Bugs')}>Bugs</div>
          <div className={styles.line3}></div>
          <div style={{paddingLeft:'0.5vw' , paddingTop:'1vh'}} onClick={()=>setfeedbackchoice('Feedback')}>Feedback</div>
          <div className={styles.line3}></div>
          <div style={{paddingLeft:'0.5vw' , paddingTop:'1vh'}} onClick={()=>setfeedbackchoice('Query')}>Query</div>
         </div>
        <div className={styles.feedback}>Feedback</div>
        <textarea className={styles.feedbacktext} spellCheck={false} placeholder='Type your feedback'></textarea>
        <div className={styles.submit}>Submit</div>
      </div>
      <div className={styles.userfeedback} onClick={()=>openorclosepopup('feedback-container')}>
        <img src={feedback} alt='' className={styles.feedbackimage}/>
      </div>
      </>
      :
      ""
      }
      <div className={styles.bottom}>Musicart | All rights reserved</div>
    </>
  )
}
