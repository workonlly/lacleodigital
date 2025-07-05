import Home from './home';
import Navbar from './header';
import Footer from './footer';
import OurProfiles from './sociallinks';
import { useState,useEffect } from 'react';
import Services from './services';
import ContactForm from './email';





function App() {

 const[value,setvalue]=useState("home")
useEffect(()=>{
 const click=()=>{
  const id=window.location.search.split('=')[1]
 }
})
  return (
    <>


    <section className='sticky top-5 z-50'><Navbar/></section>

        {value=="home" && <Home/>} 
    
         {value=="services" && <Services/>}
      
     
     <section><ContactForm/></section>
     <OurProfiles/>
     <Footer></Footer>
     
    
    </>
  )
}

export default App
