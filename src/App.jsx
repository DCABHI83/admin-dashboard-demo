  import React from 'react'
  import {HashRouter,Routes,Route} from 'react-router-dom'
import Header from './UI/Header'
import Footer from './UI/Footer'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Category from './pages/Category'
import Coupons from './pages/Coupons'

import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
  const App = () => {
    return (
     <>
     <HashRouter>
  <Header/>

<Routes>

<Route path='/' element={<Dashboard/>}/>
<Route path='/admin/products' element={<Products/>}/>
<Route path='/admin/orders' element={<Orders/>}/>
<Route path='/admin/customers' element={<Customers/>}/>
<Route path='/admin/category' element={<Category/>}/>
<Route path='/admin/coupons' element={<Coupons/>}/>
<Route path='/admin/uers' element={<Users/>}/>

</Routes>
<Footer/>

     </HashRouter>
     
     </>
    )
  }
  
  export default App