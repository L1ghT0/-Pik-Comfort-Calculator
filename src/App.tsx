import React from 'react';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import {Routes, Route} from "react-router";
import CalculateForm from "./components/CalculateForm/CalculateForm";
import Header from "./components/Header/Header";


function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/calculate' element={<CalculateForm />}/>
                    {/*<Route path='/history' element={<History />}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
