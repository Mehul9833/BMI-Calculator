import React, { useState } from 'react';
import './App.css'
import BlankDiv from './Components/BlankDiv';
import Section from './Components/Section';
import Header from './Components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Section />
      <BlankDiv />
    </div>
  )
}

export default App
