import React from 'react';
import './App.css';
import Login from "./components/Login";
import {initializeApp} from "firebase/app";
import {config} from "./components/Login/config";
initializeApp(config.firebaseConfig);
function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
