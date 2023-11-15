import React from 'react';
import './styles.css';
import {Link} from "react-router-dom";



const HomePage = () => {
    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <title>Homepage</title>
                <link rel="stylesheet" href="./styles.css" />
            </head>
            <body>
                <div className="top-container">
                    <div className="uva-logo">
                        <img src={require("./images/vsabre.png")} width="15%" />
                    </div>
                    <h1 className="title">Hoos Available</h1>
                    <input type="text" placeholder="Search for a professor or class" />
                    <button type="submit">
                        <img src={require("./images/search-icon.png")} width="14px" />
                    </button>
                </div>
                <div className="boxes-container">
                    <div className="box-left">
                        <img className="box-button-icon" src={require("./images/Iconsmind-Outline-Professor.ico")}/>
                        <Link to={"./FindProfessor"} className="box-text">Find Professors</Link>
                    </div>
                    <div className="box-right">
                        <img className="box-button-icon" src={require("./images/book-outline.png")}/>
                        <Link to={"./BrowseCourses"} className="box-text">Browse Courses</Link>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default HomePage;