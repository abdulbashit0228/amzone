//import logo from './logo.svg';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Routes,Route} from 'react-router-dom'


import Dashboard from './Component/Dashboard';
import Category from './Component/Category';
import Product from './Component/Product';

import Login from './Component/Login'
import Customer from './Component/Customer';
import Account from './Component/Account';
import Home from './Component/Home';
import Update from './Component/Update';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}>
      <Route path='/category' element={<Category />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/Customer' element={<Customer />}></Route>
      <Route path='/Account' element={<Account />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/Update/:cId' element={<Update/>}></Route>
      



      </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
