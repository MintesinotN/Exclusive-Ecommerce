import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ThemeSwap from './components/ThemeSwap'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import Account from './pages/Account'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  

  return (
    <div className="relative min-h-screen dark:bg-black bg-white">
      <ThemeSwap />
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkOut' element={<CheckOut />} />
        <Route path='/account' element={<Account />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path='/product-details' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App