import './css/App.css'
import {useEffect, useState} from "react";
import {getLocations, getSpecies} from "./api/Api.jsx";
import Header from "./assets/Header.jsx";
import AnimalList from "./assets/AnimalList.jsx";

function App() {
    const [animals, setAnimals] = useState([]);
    const [locations, setLocations] = useState([]);
    const [species, setSpecies] = useState([]);

    const downloadSpecies = async () => {
        const response = await getSpecies();
        if (!response.error) {
            setSpecies(response.data);
        }
    }
    const downloadLocations = async () => {
        const response = await getLocations();
        if (!response.error) {
            setLocations(response.data);
        }
    }

    useEffect(() => {
        downloadSpecies();
        downloadLocations();
    }, [animals]);

    return (
        <div className="App">
            <Header title="Zoologico Gomez"/>
            <AnimalList species={species} locations={locations} animals={animals} setAnimals={setAnimals}/>
        </div>
    )
}

export default App
