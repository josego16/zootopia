import '../../css/AnimalList.css';
import {useContext, useEffect, useState} from "react";
import Animal from "./Animal.jsx";
import {AnimalContext} from "../../context/AnimalContext.jsx";
import MenuCountries from "../../assets/MenuCountries.jsx";
import MenuLocations from "../../assets/MenuLocations.jsx";
import SearchBar from "../../assets/SearchBar.jsx";

const AnimalList = () => {
    const {
        animals,
        countries,
        locations,
        getAnimals,
        getCountries,
        getLocations,
        deleteAnimal
    } = useContext(AnimalContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredAnimals, setFilteredAnimals] = useState([]);

    useEffect(() => {
        getAnimals();
        getCountries();
        getLocations();
    }, []);

    useEffect(() => {
        filterAnimals();
    }, [animals, searchTerm]);

    const filterAnimals = () => {
        let filtered = animals;

        if (searchTerm.trim() !== "") {
            filtered = filtered.filter(animal =>
                animal.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredAnimals(filtered);
    };

    return (
        <div>
            <MenuCountries countries={countries}/>
            <MenuLocations locations={locations}/>
            <SearchBar search={searchTerm} setSearch={setSearchTerm}/>
            <div className="animal-list">
                {filteredAnimals.length === 0 ? (
                    <p>No se han encontrado animales</p>
                ) : (
                    filteredAnimals.map(animal => (
                        <Animal key={animal.id} animal={animal} onDelete={deleteAnimal}/>
                    ))
                )}
            </div>
        </div>
    );
};

export default AnimalList;