import './App.css';
import React from 'react'
import Home from './pages/home';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Dragões from './pages/fotos2/fotos2';
import Personagens from './pages/fotos/fotos';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Dragões />}/>
        <Route path='/fotos' element={<Personagens />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
