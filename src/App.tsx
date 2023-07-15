import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import './App.css';
import Details from "./components/details/Details";
import Header from './components/header/Header';
import Home from "./components/home/Home";
import {HomeContainer} from "./components/home/styles/HomeStyles";
import ViewSelectMov from './components/viewedSelectedMovies/ViewSelectMov';
import {details, favourites, home} from "./utils/constants";
import {Routes, Route} from "react-router-dom";


const App = () => {
    return (
        <>
            <HomeContainer>
                <Header/>
            </HomeContainer>
            <Routes>
                <Route path={'/'} caseSensitive={false} element={<Home />} />
                <Route path={details} element={<Details/>}></Route>
                <Route path={favourites} element={<ViewSelectMov/>}></Route>
                <Route path={home} caseSensitive={false} element={<Home />} />
            </Routes>
        </>
    );
};

export default App;
