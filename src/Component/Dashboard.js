import React from 'react'

import { Link, Outlet,useNavigate } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdSwitchAccount } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";



function Dashboard() {
  return (
    <div className='container-fluid' style={{backgroun:"#CEA968"}}>
    <div className='row flex-nowrop'>
      <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 'style={{backgroundColor:"#ffa319"}}>
          <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
              { <Link 
                  to="/dashboard"
                  className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-no7ne'>
              </Link> }
              

                <ul style={{marginTop:'100px'}}>

                      <Link 
                      to="/home"
                      className='nav-link px-0 align-middle text-white'
                      >
                        <IoHome />
                          <i className='fs-4 bi-person ms-2'></i>
                          
                          <span className='ms-2 d-none d-sm-inline'>
                              Home
                          </span>
                      </Link>
                  

                  < li style={{marginTop:'10px'}}>
                      <Link 
                      to="/category"
                      className='nav-link px-0 align-middle text-white'
                      >
                      <BiSolidCategoryAlt />

                          <i className='fs-4 bi-person ms-2'></i>
                          <span className='ms-2 d-none d-sm-inline'>
                              Category
                          </span>
                      </Link>
                  </li>

                  <li className='w-100' style={{marginTop:'10px'}}>
                      <Link 
                      to="/product"
                      className='nav-link px-0 align-middle text-white'
                      >
                         <MdProductionQuantityLimits />


                          <i className='fs-4 bi-person ms-2'></i>
                          <span className='ms-2 d-none d-sm-inline'>
                              Product
                          </span>
                      </Link>
                  </li>


                  <li className='w-100' style={{marginTop:'10px'}}>
                      <Link 
                      to="/Account"
                      className='nav-link px-0 align-middle text-white'
                      >
                        <MdSwitchAccount />

                          <i className='fs-4 bi-person ms-2'></i>
                          <span className='ms-2 d-none d-sm-inline'>
                              Your Account
                          </span>
                      </Link>
                  </li>



                  <li className='w-100' style={{marginTop:'10px'}}>
                      <Link 
                      to="/customer"
                      className='nav-link px-0 align-middle text-white'
                      >
                        <RiCustomerService2Line />

                          <i className='fs-4 bi-person ms-2'></i>
                          <span className='ms-2 d-none d-sm-inline'>
                              Customer Service
                          </span>
                      </Link>
                  </li>


                  <li className='w-100' style={{marginTop:'10px'}}>
                      <Link 
                      to="/Login"
                      className='nav-link px-0 align-middle'
                      >
                        <RiLoginBoxFill />

                          <i className='fs-4 bi-person ms-2'></i>
                          <span className='ms-2 d-none d-sm-inline'>
                              Login
                          </span>
                      </Link>
                  </li>
                  

              </ul>  
          </div>
      </div>

       <div className='col p-0 m-0'>
          <div className='p-2 d-flex justify-content-center text-white' style={{backgroundColor:"#ffa319"}}>
            
         <h3> <FaAmazon /> </h3> 
         
            <h3>Amazon.in</h3>

          </div>

          <Outlet />

      </div> 

    </div>
    
</div>

  )
}

export default Dashboard;
