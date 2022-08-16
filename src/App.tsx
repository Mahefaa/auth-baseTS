import React from 'react';
import './App.css';
import Login from "./Pages/Login";
import {initializeApp} from "firebase/app";
import {config} from "./Pages/Login/config";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AuthRoute from "./Pages/AuthRoute";
const app = initializeApp(config.firebaseConfig);
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={
                    <AuthRoute>
                        <HomePage app={app}/>
                    </AuthRoute>
                }/>
                <Route path={"/login"} element={
                    <Login/>
                }/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
