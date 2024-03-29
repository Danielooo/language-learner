import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/homepage/HomePage.jsx';
import UploadExercises from './pages/uploadExercises/UploadExercises.jsx';

// components
import NavBar from "./components/navBar/NavBar.jsx";

// misc
import './App.css';

// To do
// TODO: file inhoud wordt getoond op homepage. Naam en inhoud
// TODO: create AllExcercisesContext

// done
// TODO: maak input voor meerdere files
// TODO: maak navbar
// TODO: maak link naar upload Exercises
// TODO: link github remote
// TODO: maak werkend txt file naar useState



function App() {
    
    return (
        <>
            <NavBar/>
            <main>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={<HomePage/>}
                    />
                    <Route
                        exact
                        path='/up'
                        element={<UploadExercises/>}
                    />
                
                </Routes>
            </main>
            {/*<Footer/>*/}
        </>
    );
}

export default App;
