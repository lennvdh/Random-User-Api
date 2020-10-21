import React from 'react';
import Background from './components/Background';
import Fetch from "./components/Fetch";
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Background/>
      <Fetch/>
    </div>
  );
}

export default App;
