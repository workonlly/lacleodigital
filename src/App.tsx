import { useState } from 'react';
import Home from './home';
import Admin from './admin/admin';
import LoginPanel from './admin/LoginPanel';
import Services from './services';
import Blog from './blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Casestudies from './casestudies';
import Aboutus from './aboutus';
import ContactUs from './contactus';
import Show from './show';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/casestudies" element={<Casestudies/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/show" element={<Show/>} />
        <Route path="/admin" element={
          isAuthenticated
            ? <Admin onLogout={() => setIsAuthenticated(false)} />
            : <LoginPanel onLogin={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        } />
      </Routes>
    </Router>
  );
}

export default App;
