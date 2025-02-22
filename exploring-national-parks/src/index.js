/**
 * This file is the entry point of the React application.
 * It renders the main components of the application using React Router.
 * The components include ParkSearch, ParkInfo, HomePage, and ParkPlan.
 * It also includes a Navbar and a Footer component.
 * The main CSS file is imported and applied to the rendered components.
 * The root element is obtained using ReactDOM.createRoot and the components are rendered inside it.
 * The activitiesDropdown element is commented out.
 * Performance measurement and analytics functionality are mentioned but not implemented.
 * @file
 * @summary the entry point of the React application
 * @module index
 * @requires react
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from './AboutPage.js';
import Footer from './GlobalComponents/Footer.jsx';
import Navbar from './GlobalComponents/Navbar.jsx';
import HomePage from './HomePage.js';
import ParkInfo from './ParkInfo.js';
import ParkPlan from './ParkPlan.js';
import ParkSearch from './ParkSearch.js';
import './Style/main.css';
import TempleTwitter from './TempleTwitter.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ParkSearch" element={<ParkSearch />} />
                <Route path="/ParkInfo" element={<ParkInfo />} />
                <Route path="/ParkPlan" element={<ParkPlan />} />
                <Route path="/test" element={<div>Test Route</div>} />
                <Route path="/TempleTwitter" element={<TempleTwitter />} />
                <Route path="/AboutPage" element={<AboutPage />} />


            </Routes>
            <Footer></Footer>
        </Router>

    </div>
);


// const activities = ReactDOM.createRoot(document.getElementById('activitiesDropdown'));
// activities.render(
//     <Activities />
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

