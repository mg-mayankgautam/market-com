import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import HomePage from './pages/HomePage';
import { useRef } from 'react';
import Covendx from './components/ProjectPage/Covendx';
import Bhurji from './components/ProjectPage/Bhurji';
import Moheera from './components/ProjectPage/Moheera';
import Aadmiwala from './components/ProjectPage/Aadmiwala';
import Homeproject from './components/ProjectPage/Homeproject';
import SocialMedia from './components/servicePage/SocialMedia';
import Webdev from './components/servicePage/Webdev';
import ProductDesign from './components/servicePage/ProductDesign';
import Appdev from './components/servicePage/Appdev';
import CorporateStrategy from './components/servicePage/CorporateStrategy';
import Seo from './components/servicePage/Seo';

function App() {

  const about_ref = useRef(null);
  const contact_ref = useRef(null)

  return (
    <Routes>

      <Route path="/" element={<Layout about_ref={about_ref} contact_ref={contact_ref} />}>

        <Route index element={<HomePage about_ref={about_ref} contact_ref={contact_ref} />} />

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
