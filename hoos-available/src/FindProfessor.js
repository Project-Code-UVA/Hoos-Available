import React, {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './styles.css';


const FindProfessor = () => {
        const renderList = (entry) => {
            if(entry.name.toLowerCase().includes(filter.toLowerCase()) || filter === '')
            return (
                <>
                    <Accordion.Item eventKey={entry.id}>
                        <Accordion.Header id={entry.name}>{entry.name}</Accordion.Header>
                        <Accordion.Body>
                            <option className="Professor"> Professor 1</option>
                            <option className="Professor"> Professor 2</option>
                            <option className="Professor"> Professor 3</option>
                        </Accordion.Body>
                    </Accordion.Item>

                </>
            )
        }
    const departments = [
        {name: "African American and African Studies", id: "0"},
        {name: "American Sign Language Program", id: "1"},
        {name: "American Studies", id: "2"},
        {name: "Anthropology", id: "3"},
        {name: "Art", id: "4"},
        {name: "Astronomy", id: "5"},
        {name: "Biology", id: "6"},
        {name: "Chemistry", id: "7"},
        {name: "Classics", id: "8"},
        {name: "Cognitive Science", id: "9"},
        {name: "Creative Writing", id: "10"},
        {name: "Drama", id: "11"},
        {name: "East Asian Languages", id: "12"},
        {name: "Economics", id: "13"}
    ];
        const [filter, setFilter] = useState('');

    const items = departments.map((dept) => renderList(dept))
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
            <input type="text"
                   id="userInput"
                   value = {filter}
                   onChange = {event => setFilter(event.target.value)}
                   placeholder="Search for department..."/>

            <Accordion id="department-container">
                {items}
            </Accordion>
            </body>
        </>
    );
}

export default FindProfessor;