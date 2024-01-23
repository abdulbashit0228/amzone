import axios from 'axios';
 import { MdEdit , MdDelete} from "react-icons/md";
 
import React, { useEffect, useState } from 'react'

//import './Category.css'
 //import { Outlet } from 'react-router-dom';
// import Dashboard from './Dashboard';

function Category() {
const [show, setShow] = useState([])
const [data, setData]= useState({
    cId:'',
    cName:'',
});
const handleSubmit=(e)=>{
    e.preventDefault()
  axios.post('http://localhost:5000/api/postcategory', data)
  .then((res)=>{
    console.log(res);
    alert("data post successfully")
  }).catch((err)=>{
    console.log(err)
  })
}

useEffect(()=>{
    axios.get('http://localhost:5000/api/getcategory')
    .then((res)=>{
        console.log(res);
        setShow(res.data)
    }).catch((err)=>{
        console.log(err);
    })
},[])
 //const [deletedata, setDeleteData] = useState()
const handleDelete = (cId) =>{
    axios.delete(`http://localhost:5000/api/deletecategory/${cId}` )
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
    

<div className='d-flex justify-content-center align-items-center Product' style={{marginTop:"150px"}}>

<div className='p-3 rounded w-25 border ' style={{backgroundColor:"#ebc0e8"}}>
  

        <h2 style={{color:"white"}}> Category </h2>
        <form onSubmit={handleSubmit}>
          <div className=' col-12 mb-3'>
            <label htmlFor='category id' style={{color:"white"}}>Category Id</label>
            <input type='text' name='category id' placeholder='Enter Category id'
            className='form-control rounded-15 mt-2'
               onChange={(e) => setData({ ...data, cId: e.target.value })} />
              
          </div>

          <div className='col-12 mb-3'>
            <label htmlFor='productname' style={{color:"white"}}>Product Name</label>
            <input type='text' name='productname' placeholder='Enter Product Name'
            className='form-control rounded-15 mt-2'
                            onChange={(e) => setData({ ...data, cName: e.target.value })} />
                            
          </div>

          

          <button className='col-12 btn btn-success w-100 rounded-0 mt-3' style={{backgroundColor:""}}>Add Category</button>
        </form>
      </div>
      <table>
        <tr>
            <th>cId</th>
            <th>cName</th>
            <th style={{}}>Action</th>
        </tr>
        {
            show.map((item)=>
            <tr>
            <td>{item.cId}</td>
            <td>{item.cName}</td>
            <td><button onclick={()=>handleupdate(item.cId)}className=''><MdEdit/></button></td>
            <td><button onClick={()=> handleDelete(item.cId)} className=''><MdDelete/></button></td>
            </tr>
            )
        }
        
      </table>
      </div>
      
      
  )
  
}

export default Category;