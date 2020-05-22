import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import RemoteWork from "./RemoteWork/RemoteWork";

function App ()  {
  return (
    <div className="App">
      <Header/>
      <Main />
      <Skills/>
      <Works/>
      <RemoteWork/>
    </div>
  );
}

export default App;
