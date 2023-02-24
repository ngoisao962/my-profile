import React from 'react';
import './App.css';
import Hd from './compents/Header/Hd';
import Home from './compents/home/Home';
import About from './compents/about/About';
import Skill from './compents/skilss/Skill';
// import Serive from './compents/Servie/Serive';
import Content from './compents/Content/Content';
import Scrollup from './compents/Scrollup/Scrollup';
function App() {
  return (
    <div>
      <Hd />
      <main className='main'>
        <Home />
        <About/>
        <Skill/>
        {/* <Serive/> */}
        <Content/>
      </main>
    <Scrollup/>
    </div>
  );
}

export default App;
