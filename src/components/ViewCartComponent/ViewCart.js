import React, { useEffect, useState } from 'react';
import styles from './ViewCart.module.css';
import phonecall from '../../assets/images/phonecall.png';
import toast, { Toaster } from 'react-hot-toast';
import signupimg from '../../assets/images/signupimg.png';
import whitecart from '../../assets/images/whitecart.png';
import blackcart from '../../assets/images/blackcart.png';
import { useNavigate } from 'react-router-dom';

export default function ViewCart() {

  const navigate = useNavigate();
  let [total_price , setTotal_price] = useState(0);
  let [countitems , setCountitems] = useState(0);
  let [conveniencefee , setConveniencefee] = useState(0);
  let [totalamount , setTotalamount] = useState(0);
  let [objects, setObjects] = useState([]);
  let [products , setProducts] = useState([]);
  let calc = [];
  let obj;

  useEffect(()=>{
    calc = JSON.parse(localStorage.getItem('Cart'));
    calc.map((item) => {
     if(item.count > 0)
     {
      total_price = total_price + item.tot_price;
      setTotal_price(total_price);
      countitems = countitems + item.count;
      setCountitems(countitems);
      setConveniencefee(45*countitems);
      totalamount = totalamount + (45*item.count) + item.tot_price;
      setTotalamount(totalamount);
     }
     }
     );

     obj = JSON.parse(localStorage.getItem('Cart'));

     obj.map((product) => {
      if (product.count > 0){
        products.push(product);
        setProducts(...products);
      }
      });
      setObjects(products);
  },[]);

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
        <div className={styles.container}>
        <hr className={styles.firsthorizontalline}></hr>
          <div className={styles.displayproducts}>
            {objects?.map((item , index) => (
                 
                 <>
                  
                   <div style={{display:'flex' , width:'60vw' , height:'20vh'}}>
                     <div style={{color:'black' , width:'20vw' , height:'4vh'}}>{item.pname}</div>
                     
                   </div>
                 </>
                 
               ))}
          </div>
          <div style={{height:'8vh'}}/>
          <hr className={styles.secondhorizontalline}></hr>
          <div style={{display:'flex'}}>
              <div></div>
              <div></div>
          </div>
        </div>
        <div className={styles.verticalbar}></div>
        <div>
        <div style={{ marginLeft: '2vw', marginTop: '1vh' }}>
          <div className={styles.pricedetails}>PRICE DETAILS</div>
        </div>
      
      <div style={{ display: 'flex' }}>
        <div className={styles.mrp} style={{marginTop:'2vh'}}>Total MRP</div>
        <div className={styles.mrp} style={{ marginLeft: '10vw',marginTop:'2vh'}}>₹{total_price}</div>
      </div>
      <div style={{ display: 'flex', marginTop: '2vh' }}>
        <div className={styles.mrp}>Discount on MRP</div>
        <div className={styles.mrp} style={{ marginLeft: '6.1vw' }}>₹0</div>
      </div>
      <div style={{ display: 'flex', marginTop: '2vh' }}>
        <div className={styles.mrp}>Convenience Fee</div>
        <div className={styles.mrp} style={{ marginLeft: '6.3vw' }}>₹{conveniencefee}</div>
      </div>
      <div style={{ display: 'flex', marginTop: '4vh' }}>
        <div className={styles.mrp} style={{ fontWeight: '500', fontSize: '1.3rem' }}>Total Amount</div>
        <div className={styles.mrp} style={{ marginLeft: '7vw', marginTop: '1.5vh' }}>₹{totalamount}</div>
      </div>
      <div className={styles.placeorder} onClick={() => { navigate('/placeorder') }}>PLACE ORDER</div>
      
      </div>
      </div>
      <div className={styles.bottom}>Musicart | All rights reserved</div>
    </div>
  )
}
