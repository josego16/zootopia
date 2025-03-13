import axios from 'axios';
import {createContext, useState} from 'react';

const AnimalContext = createContext();

const AnimalProvider = ({children}) => {
    const [animals, setAnimals] = useState([]);
    const [countries, setCountries] = useState([]);
    const [locations, setLocations] = useState([]);

    const getAnimals = async () => {
        const response = await axios.get('http://localhost:3000/animals');
        setAnimals(response.data);
    };
    const getCountries = async () => {
        const response = await axios.get('http://localhost:3000/countries');
        setCountries(response.data);
    }
    const getLocations = async () => {
        const response = await axios.get('http://localhost:3000/locations');
        setLocations(response.data);
    }

    const postAnimal = async (animal) => {
        const response = await axios.post('http://localhost:3000/animals', animal);
        await getAnimals();
        return response;
    };

    const deleteAnimal = async (id) => {
        await axios.delete(`http://localhost:3000/animals/${id}`);
        await getAnimals();
    };

    return (
        <AnimalContext.Provider value={
            {
                animals, countries, locations, setAnimals,
                getAnimals, getCountries, getLocations,
                postAnimal,
                deleteAnimal
            }
        }>
            {children}
        </AnimalContext.Provider>
    );
};

export {AnimalContext, AnimalProvider};