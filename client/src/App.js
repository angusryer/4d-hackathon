import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.scss';
import Header from '../src/Components/Header/Header';
import Home from '../src/Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
