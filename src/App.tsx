import Home from './home';

import Admin from './admin/admin';
import Services from './services';
import Blog from './blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Casestudies from './casestudies';
import Aboutus from './aboutus';
import ContactUs from './contactus';
import Show from './show';




function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/casestudies" element={<Casestudies/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/show" element={<Show/>} />
        <Route path="/show" element={<Show/>} />
        <Route path="/admin" element={<Admin/>} />
        
      </Routes>
    </Router>

    </>
  )
}

export default App
