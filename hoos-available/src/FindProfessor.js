import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './styles.css';
const FindProfessor = () =>{
    return(
        <>
            <head>
                <meta charSet="UTF-8" />
                <title>Homepage</title>
                <link rel="stylesheet" href="./styles.css" />
            </head>
            <body>
            <div className="top-container">
                <h1 className="professor-title">Find Professors By Department</h1>
            </div>
            </body>
            <Accordion className="department-container">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>African American and African Studies</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>American Sign Language Program</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>American Studies</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Anthropology</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Art</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Astronomy</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Biology</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>Chemistry</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>Classics</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>Cognitive Science</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                    <Accordion.Header>Creative Writing</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                    <Accordion.Header>Drama</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                    <Accordion.Header>East Asian Languages</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                    <Accordion.Header>Economics</Accordion.Header>
                    <Accordion.Body>
                        <option className="Professor"> Professor 1 </option>
                        <option className="Professor"> Professor 2</option>
                        <option className="Professor"> Professor 3 </option>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    );
}

export default FindProfessor;