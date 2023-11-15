import React from 'react';
import './styles.css';

const FindProfessor = () =>{
    return(
        <>
            <meta charSet="UTF-8" />
            <title>Homepage</title>
            <link rel="stylesheet" href="hoos-available/src/styles.css" />
            <div className="top-container">
                <h1 className="professor-title">Find Professors By Department</h1>
            </div>
            <div className="department-container">
                <select>
                    <option className="African American and African Studies">
                        African American and African Studies
                    </option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="American Sign Language Program">
                        American Sign Language Program
                    </option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="American Studies">American Studies</option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="Antropology">Antropology</option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="Art">Art</option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="Astronomy">Astronomy</option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="Biology">Biology</option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="Chemistry">Chemistry</option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="Classics">Classics</option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="Cognitive Science">Cognitive Science</option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="Creative Writing">Creative Writing</option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="Drama">Drama</option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="East Asian Languages">East Asian Languages</option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
                <select>
                    <option className="Economics">Economics</option>
                    <option className="Professor"> Professor 1 </option>
                    <option className="Professor"> Professor 2</option>
                    <option className="Professor"> Professor 3 </option>
                </select>
            </div>
        </>
    );
}

export default FindProfessor;