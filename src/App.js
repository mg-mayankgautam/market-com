import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import HomePage from './pages/HomePage';
import { useRef } from 'react';
import Covendx from './components/ProjectPage/Covendx';

function App() {

  const about_ref = useRef(null);
  const contact_ref = useRef(null)

  return (
    <Routes>

      <Route path="/" element={<Layout about_ref={about_ref} contact_ref={contact_ref} />}>

        <Route index element={<HomePage about_ref={about_ref} contact_ref={contact_ref} />} />

        <Route path="project/covendx" element={<Covendx />} />
        {/* <Route path="project/bhurjielectronics" element={<ProjectPage/>}/> */}
        {/* <Route path="project/moheera" element={<ProjectPage/>}/> */}

      </Route>

    </Routes>
  );
}

export default App;
