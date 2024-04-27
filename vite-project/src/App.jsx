import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import { gallery } from './data';
import './App.css';
import Header from './Header';
import Gallery from './Gallery';
import './css/Gallery.css';
import Footer from './Footer';

function App() {



  

  return (
    <div style={{backgroundColor:'lightgray'}}>
    <Header/>
     <div className='gallery-main' >
    {
      gallery?.map((gallery)=>(
        <Gallery key={gallery.id} gallery={gallery}/>

      ))


    }
     </div>
     <Footer/>
    </div>
  )
}

export default App;
