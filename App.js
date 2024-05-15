import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Barrita from "./components/AppBar";
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Pagina3 from './components/Pagina3';
import Waza from "./components/prueba";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*
function Caja(){
  return(
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
      </Box>
  );
}*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pagina1/>}/>
        <Route path="/pagina2" element={<Pagina2/>}/>
        <Route path="/pagina3" element={<Pagina3/>}/>
        <Route path="/waza" element={<Waza/>}/>
      </Routes>
    </Router>
  );
}

export default App;
