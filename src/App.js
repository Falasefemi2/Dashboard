import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Topbar from './component/Topbar/Topbar';
import Sidebar from './component/Sidebar/SideBar';
import "./app.css";
import Home from './component/pages/Home/Home';
import UserList from './component/pages/userList/UserList';
import User from './component/pages/user/User';
import NewUser from './component/pages/newUser/NewUser';
import ProductList from './component/pages/productlist/ProductList';
import Product from './component/pages/product/Product';
import NewProduct from './component/pages/newProduct/NewProduct';




function App() {
  return (
    <>
      <Topbar />
      <div className="container">
      <Sidebar />
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/users' element={<UserList />} />
      <Route path='/users/:userId' element={<User />} />
      <Route path='/newUser' element={<NewUser />} />
      <Route path='/products' element={<ProductList />} />
      <Route path='/products/:productsId' element={<Product />} />
      <Route path='/newproduct' element={<NewProduct/>} />
      </Routes>
      </div>
      </>
  );

}

export default App;