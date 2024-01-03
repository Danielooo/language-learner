import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/homepage/HomePage.jsx';
import UploadExercises from './pages/uploadExercises/UploadExercises.jsx';
import './App.css';


function App() {
    
    return (
        <>
            {/*<Nav/>*/}
            <main>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={<HomePage/>}
                    />
                    <Route
                        exact
                        path='/'
                        element={<UploadExercises/>}
                    />
                
                </Routes>
            </main>
            {/*<Footer/>*/}
        </>
    );
}

export default App;
