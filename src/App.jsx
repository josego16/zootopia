import './css/App.css'
import {useEffect, useState} from "react";
import {getCountries, getLocations} from "./api/Api.jsx";
import Header from "./assets/Header.jsx";
import AnimalList from "./assets/AnimalList.jsx";
import SearchBar from "./assets/SearchBar.jsx";

function App() {
    const [animals, setAnimals] = useState([]);
    const [locations, setLocations] = useState([]);
    const [countries, setCountries] = useState([]);

    const [search, setSearch] = useState('');
    const [filteredAnimals, setFilteredAnimals] = useState([]);

    const downloadCountries = async () => {
        const response = await getCountries();
        if (!response.error) {
            setCountries(response.data);
        }
    }
    const downloadLocations = async () => {
        const response = await getLocations();
        if (!response.error) {
            setLocations(response.data);
        }
    }

    useEffect(() => {
        downloadCountries();
        downloadLocations();
    }, [animals]);

    return (
        <div className="App">
            <Header title="Zoologico Gomez"/>
            <SearchBar search={search}
                       setSearch={setSearch}
                       animals={animals}
                       setFilteredAnimals={setFilteredAnimals}/>
            <AnimalList countries={countries}
                        locations={locations}
                        animals={filteredAnimals.length > 0 || search ? filteredAnimals : animals}
                        setAnimals={setAnimals}/>
        </div>
    )
}

export default App