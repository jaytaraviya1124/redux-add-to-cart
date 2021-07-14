import React from 'react';
import './App.css';
// import Home from './component/Home'
import Homecontainer from './container/Homecontainer';
import Headercontainer from './container/Headercontainer';
// import Header from './component/Header';

function App() {
  return (
    <div className="App">
    <Headercontainer/>
    <Homecontainer />

    </div>
  );
}

export default App;
