import './css/App.css'
import {useEffect, useState} from "react";
import {getLocations, getSpecies} from "./api/Api.jsx";
import Header from "./assets/Header.jsx";
import AnimalList from "./assets/AnimalList.jsx";
import MenuSpecies from "./assets/MenuSpecies.jsx";
import MenuLocations from "./assets/MenuLocations.jsx";
import SearchBar from "./assets/SearchBar.jsx";

function App() {
    const [animals, setAnimals] = useState([]);
    const [locations, setLocations] = useState([]);
    const [species, setSpecies] = useState([]);

    const [search, setSearch] = useState('');
    const [filteredAnimals, setFilteredAnimals] = useState([]);

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
            <MenuSpecies/>
            <MenuLocations/>
            <SearchBar search={search}
                       setSearch={setSearch}
                       animals={animals}
                       setFilteredAnimals={setFilteredAnimals}/>
            <AnimalList species={species}
                        locations={locations}
                        animals={filteredAnimals.length > 0 || search ? filteredAnimals : animals}
                        setAnimals={setAnimals}/>
        </div>
    )
}

export default App