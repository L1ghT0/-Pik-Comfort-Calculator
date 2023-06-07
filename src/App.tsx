import React from 'react';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import {Routes, Route} from "react-router";
import CalculateForm from "./components/CalculateForm/CalculateForm";


function App() {



    return (
        <div className="app-wrapper">
            <HomePage/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/calculate' element={<CalculateForm />}/>
                    {/*<Route path='/history' element={<History />}/>*/}
                </Routes>
            </div>


            <select>

            </select>
        </div>
    );
}

export default App;
