import React from 'react';
import { MdOutlinePayment } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { FiMapPin } from "react-icons/fi";
import { FaAmazonPay } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";


function Account() {
    return(

        <div className=''>
           <h1> Your Account </h1>

            <div className='p-3 rounded w-50 border mt-5' style={{backgroundColor:"#e3dddc"}}>
            <h3><GrSecure /></h3>
             <h5>Login & security</h5>
               Edit login, name, and mobile number
        </div>

        <div className='p-3 rounded w-50 border mt-5' style={{backgroundColor:"#e3dddc"}}>
           <h3><FiMapPin /></h3>
             <h5>Your Addresses</h5>
               Edit addresses for order and gifts
        </div>

        <div className='p-3 rounded w-50 border mt-5' style={{backgroundColor:"#e3dddc"}}>
            <h3><MdOutlinePayment /></h3>
             <h5>Payment option</h5>
               Edit or add payment methods 
        </div>

        <div className='p-3 rounded w-50 border mt-5' style={{backgroundColor:"#e3dddc"}}>
            <h3><FaAmazonPay /></h3>
            <h5>Amazon Pay balance</h5>
               Add money to your balance  
        </div>

        <div className='p-3 rounded w-50 border mt-5' style={{backgroundColor:"#e3dddc"}}>
           <h3><FaAmazon /></h3>
             <h5>Your business account</h5>
                  sign up to save up to 28% with GST invoice and bulk discount, purchase on credit, and more
        </div>
   
     <div className='mydiv'>
      
       
        <button className=' col-12 btn btn-success w-80 rounded-3 mt-5  'style={{backgroundColor:"#ffa319"}}>Sign In </button>     
        New customer? Start here.
    </div>
        

  </div>

    )
 }

  export default Account;
