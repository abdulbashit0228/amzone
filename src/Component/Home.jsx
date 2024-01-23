import React from "react";
import { FaAmazon } from "react-icons/fa";


function Home() {
    return(

     <div className="mydiv1">
         <h3><FaAmazon /></h3>
         <h1> Greeting From Amazon</h1>

      <div className='p-3 rounded w-100% border' style={{backgroundColor:"#e3dddc"}}>
    
        <h2 style={{color:"black"}}>Your Profile</h2>
        
          <div className=' col-12 mb-3'>
            <label htmlFor='category id'style={{color:"black"}}>Welcome to the Amazon Shopping App</label>
              
          </div>
        </div>  
</div>

    )
}
    
export default Home;
