import React, {useState} from 'react';
import './App.css';
import Login from "./Pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthRoute, {Redirect} from "./Pages/AuthRoute";
import HomePage from "./Pages/HomePage";
function App() {
    const [loading,setLoading] = useState<boolean>(false);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} element={
                        <AuthRoute setLoading={setLoading}>
                            <HomePage/>
                        </AuthRoute>
                    }/>
                    <Route path={"/login"} element={
                        <Redirect setLoading={setLoading}>
                            <Login/>
                        </Redirect>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
