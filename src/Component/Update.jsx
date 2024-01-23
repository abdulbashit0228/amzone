import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function Update() {

   const {cId} = useParams();
   const [values, setValues] = useState({
      cid: "",
      pName:"",
      pPrice: ""

   })


     const handleupdate = ()=>{
      axios.put (`http://localhost:5000/api/putproduct/${cId}`)
     }



  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <form>
            <div>
                <label htmlFor='name'>Product Name</label>
                <input type='text' name='name' className='form-control' placeholder='Enter Product'/>
            </div>
            <div>
               <label htmlFor='name'>Product Price</label>
               <input type='text' name='name' className='form-control' placeholder='Enter Price'/>
            </div>
             <br/>

             <button className='btn btn-info'>Update</button>

        </form>

    </div>
    </div>
  )
}

export default Update;
