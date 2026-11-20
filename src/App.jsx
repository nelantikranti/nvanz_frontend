import { useEffect } from 'react'
import NavBar from './Components/NavBar.jsx'
import DigitalStudioPage from './Pages/DigitalStudioPage.jsx'
import Home from './Pages/Home.jsx'
import ElevatorIntro from './Components/ElevatorIntro.jsx'
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import AboutPage from './Pages/AboutPage.jsx';
import Footer from './Components/Footer/Footer.jsx';
import CommercialPage from './Pages/ProductsPages/CommercialPage.jsx'
import HomeElevator from './Pages/ProductsPages/HomeElevator.jsx'
import ProductsDetails from './Pages/ProductsPages/ProductsDetails.jsx'
import ProductPage from './Pages/ProductsPages/ProductPage.jsx'
import Blogs from './Pages/BlogPages/Blogs.jsx'
import TechnicalBlogs from './Pages/BlogPages/TechnicalBlogs.jsx'
import NonTechnicalBlogs from './Pages/BlogPages/NonTechnicalBlogs.jsx'
import BlogDetails from './Pages/BlogPages/BlogDetails.jsx'
import ContactUsHeroSection from './Components/ContactUsComponents/ContactUsHeroSection.jsx'
import ContactUs from './Pages/ContactUs.jsx'

function ScrollToLocation() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <div className="relative min-h-screen">
      <ScrollToLocation />
      <NavBar />
      <Routes>
        <Route path='/' element={<><ElevatorIntro /><Home /></>} />
        <Route path='/about-us' element={<AboutPage/>}/>
        <Route path='/digital-studio' element={<DigitalStudioPage/>}/>
        <Route path="/commercial-elevator-products" element={<CommercialPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
 <Route path='/home-elevator-products' element={<HomeElevator/>}/>
 <Route path="/products/:slug" element={<ProductsDetails/>}/>

 <Route path='/blogs' element={<Blogs/>}/>

 <Route path='/blogs/technical' element={<TechnicalBlogs/>}/>

 <Route path='/blogs/non-technical' element={<NonTechnicalBlogs/>} />

 <Route path='/blogs-details/:id' element={<BlogDetails/>}/>
 <Route path='/blog-details' element={<Navigate to='/blogs-details/1' replace/>}/>

 <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>

      <Footer/>
      
      
    </div>
  )
}

export default App
