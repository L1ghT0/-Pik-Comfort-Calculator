import React, {useEffect} from 'react';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import {Routes, Route} from "react-router";
import Header from "./components/Header/Header";
import HistoryContainer from "./components/History/HistoryContainer";
import CalculateFormContainer from "./components/CalculateForm/CalculateFormContainer";
import {initializeHistory} from "./redux/historyReducer/HistoryReducer";
import { connect } from 'react-redux';
import { ActionCreator } from '@reduxjs/toolkit';

interface IApp {
    initializeHistory: ActionCreator<any>
}

function App(props: IApp) {

    return (
        <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/calculate' element={<CalculateFormContainer />}/>
                    <Route path='/history' element={<HistoryContainer />}/>
                </Routes>
            </div>
        </div>
    );
}

const mapStateToProps = () => {
    return {
    }
}

export default connect(mapStateToProps, {initializeHistory})(App);
