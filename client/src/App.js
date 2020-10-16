import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.scss';
import Header from '../src/Components/Header/Header';
import Home from '../src/Components/Home/Home';
import Hero from '../src/Components/Hero/Hero';
import Products from '../src/Components/Products/Products';
import VideoPlayer from '../src/Components/VideoPlayer/VideoPlayer';
import Footer from '../src/Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <Products />
        <VideoPlayer />
        <Footer />
        {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
