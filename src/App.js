import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import HomePage from './pages/HomePage';
import { useRef } from 'react';
import Covendx from './pages/ProjectPage/Covendx';
import Bhurji from './pages/ProjectPage/Bhurji';
import Moheera from './pages/ProjectPage/Moheera';
import Aadmiwala from './pages/ProjectPage/Aadmiwala';
import Homeproject from './pages/ProjectPage/Homeproject';
import SocialMedia from './pages/servicePage/SocialMedia';
import Webdev from './pages/servicePage/Webdev';
import ProductDesign from './pages/servicePage/ProductDesign';
import Appdev from './pages/servicePage/Appdev';
import CorporateStrategy from './pages/servicePage/CorporateStrategy';
import Seo from './pages/servicePage/Seo';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {

  const about_ref = useRef(null);
  const contact_ref = useRef(null)

  return (
    <Routes>

      <Route path="/" element={<Layout about_ref={about_ref} contact_ref={contact_ref} />}>

        <Route index element={<HomePage about_ref={about_ref} contact_ref={contact_ref} />} />

        <Route path="aboutus" element={<AboutPage />} />
        
        <Route path="project/covendx" element={<Covendx />} />
        <Route path="project/bhurjielectronics" element={<Bhurji/>}/>
        <Route path="project/moheera" element={<Moheera/>}/>
        <Route path="project/aadmiwala" element={<Aadmiwala/>}/>
        <Route path="project/homeproject" element={<Homeproject/>}/>

        <Route path="service/socialmedia" element={<SocialMedia/>}/>
        <Route path="service/websitedevelopment" element={<Webdev/>}/>
        <Route path="service/productdesign" element={<ProductDesign/>}/>
        <Route path="service/appdevelopment" element={<Appdev/>}/>
        <Route path="service/corporatestrategy" element={<CorporateStrategy/>}/>
        <Route path="service/seo" element={<Seo/>}/>
      </Route>

    </Routes>
  );
}

export default App;
