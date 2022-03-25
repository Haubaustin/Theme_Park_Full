import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main'
import { Route, Routes, } from 'react-router-dom';
import About from './components/About.js'
import React, { useState } from 'react'
import dummy from './data/dummy'
import ParkDetails from './components/ParkDetails'


function App() {
  const [parks, setParks] = useState(dummy)
  

  return (
    <div className="App">
    <Header className ="Header"/>
    <div className='AppMain'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='/parks/:id' element={<ParkDetails parks={parks} />}/>
      </Routes> 
      </div>
    <Footer />
    </div>
  );
}

export default App;
