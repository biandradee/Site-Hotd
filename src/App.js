import './App.css';
import React from 'react'
import Home from './pages/home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dragões from './pages/fotos2/fotos2';
import Personagens from './pages/fotos/fotos';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Dragões />}/>
        <Route path='/fotos' element={<Personagens />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
