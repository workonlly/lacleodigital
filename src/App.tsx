import { useState } from 'react';
import Home from './home';
import Admin from './admin/admin';
import LoginPanel from './admin/LoginPanel';
import Services from './services';
import Blog from './blog';
import BlogPost from './BlogPost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Casestudies from './casestudies';
import Aboutus from './aboutus';
import ContactUs from './contactus';
import Show from './show';
import { HelmetProvider } from 'react-helmet-async';
import Privacypolicy from './privacypolicy';
import Terms from './terms';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/casestudies" element={<Casestudies/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blogpost/:slug" element={<BlogPost />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/show/:slug" element={<Show/>} />
          <Route path="/privacy" element={<Privacypolicy/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/admin" element={
            isAuthenticated
              ? <Admin onLogout={() => setIsAuthenticated(false)} />
              : <LoginPanel onLogin={setIsAuthenticated} isAuthenticated={isAuthenticated} />
          } />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
