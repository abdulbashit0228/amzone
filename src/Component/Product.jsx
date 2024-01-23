import axios from 'axios';
import { Link, Outlet,useNavigate } from 'react-router-dom'

import React, { useEffect,useState } from 'react'
import { MdEdit , MdDelete} from "react-icons/md";


function Product() {

const [show, setShow] = useState([])   
const [data, setData]= useState({
 cId:'',
 pName:'',
 pPrice:'',
 pImage:''

});

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(data)
const formData = new FormData()
formData.append('cId', data.cId);
formData.append('pName', data.pName);
formData.append('pPrice', data.pPrice);
formData.append('photo', data.pImage);

  axios.post('http://localhost:5000/api/postproduct', formData)
  .then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err)
  })
}


useEffect(()=>{
    axios.get('http://localhost:5000/api/getproduct')
    .then((result)=>{
        console.log(result);
       setShow(result.data)
       //alert(" Data posted SuccessFully....")

    }).catch((err)=>{
        console.log(err);
    })
},[])



const handleDelete = (cId) =>{
  axios.delete(`http://localhost:5000/api/deleteproduct/${cId}` )
  .then((res)=>{
      console.log(res);
      // setDeleteData(res.data)
      alert("Delete SuccessFully....")
  }).catch((err)=>{
      console.log(err);
  })
}

// const [updatedata,setUpdatedata]= useState()
const handleupdate = (cId) =>{
  axios.put(`http://localhost:5000/api/putcategory/${cId}`)
  .then((res)=>{
      console.log(res);
      alert("updated SuccessFully....")
  }).catch((err)=>{
      console.log(err);
  })
}




  return (
    <div className='d-flex justify-content-center align-items-center vh-100 Product' style={{backgroundColor:"#ebe6e6"}}>
     
      <div className='p-3 rounded w-25 border' style={{backgroundColor:"#ebc0e8"}}>
    

        <h2 style={{color:"white"}}>Product</h2>
        <form onSubmit={handleSubmit}>
          <div className=' col-12 mb-3'>
            <label htmlFor='category id'style={{color:"white"}}>Category Id</label>
            <input type='text' name='category id' placeholder='Enter Category id'
            className='form-control rounded-15 mt-2'
               onChange={(e) => setData({ ...data, cId: e.target.value })} />
              
          </div>

          <div className='col-12 mb-3'>
            <label htmlFor='productname' style={{color:"white"}}>Product Name</label>
            <input type='text' name='productname' placeholder='Enter Product Name'
            className='form-control rounded-15 mt-2'
                            onChange={(e) => setData({ ...data, pName: e.target.value })} />
                            
          </div>

          <div className='col-12 mb-3'>
            <label htmlFor='product_price' style={{color:"white"}}>Product Price</label>
            <input type='text' name='product_price' placeholder='Enter Product Price'
            className='form-control rounded-15 mt-2'
                              onChange={(e) => setData({ ...data, pPrice: e.target.value })} />

          </div>

          <div className='col-12'>
            <label htmlFor='product_image' style={{color:"white"}}>Product Image</label>
            <input type='file' name='form-controller-rounded mt-2' className='mt-2'
              id='inputGroupFile01' placeholder='Enter Product Image' style={{color:"white"}}
              onChange={(e)=>setData({...data, pImage:e.target.files[0]})}/>
          </div>

          <button className=' col-12 btn btn-success w-100 rounded-0 mt-3' style={{backgroundColor:""}}>Add Product </button>
        </form>
      </div>
      <table>
        <tr>
            <th>cId</th>
            <th>pName</th>
            <th>pPrice</th>
            <th>pImage</th>
            <th>Action</th>

            
        </tr>
        {
            show.map((item)=>
            <tr>
            <td>{item.cId}</td>
            <td>{item.pName}</td>
            <td>{item.pPrice}</td>
            <td>{
            <img src={item.pImage} alt='' style={{width:"40px", height:"40", borderRadius:"50%"}} />
            }
           </td>
        <td>
          
           <Link className="text-decoration-none btn btn-sm btn-success"
           to={`/update/${item.cId}`}>Update </Link>

</td>


            <td><button onClick={()=> handleDelete(item.cId)} className=''>
              <MdDelete/></button></td>

            

            </tr>
            )
        }
        
      </table>
       </div>
  )
}

export default Product