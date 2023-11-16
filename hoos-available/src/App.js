import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import FindProfessor from "./FindProfessor";
import BrowseCourses from "./BrowseCourses";




function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"
                       element={<HomePage/>}/>
                <Route path="/BrowseCourses"
                       element={<BrowseCourses/>}/>
                <Route path="/FindProfessor"
                       element={<FindProfessor/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
}

export default App;