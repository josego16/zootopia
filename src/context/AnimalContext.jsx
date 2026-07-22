import {createContext, useState} from 'react';

const AnimalContext = createContext();

const AnimalProvider = ({children}) => {
    const [animals, setAnimals] = useState([]);
    const [countries] = useState([]);
    const [locations] = useState([]);

    // TODO: Reemplazar con @tanstack/react-query + iNaturalist API durante SDD
    const getAnimals = async () => { /* stub */ };
    const getCountries = async () => { /* stub */ };
    const getLocations = async () => { /* stub */ };
    const postAnimal = async () => { /* stub */ };
    const deleteAnimal = async () => { /* stub */ };

    return (
        <AnimalContext.Provider value={
            {
                animals, countries, locations, setAnimals,
                getAnimals, getCountries, getLocations,
                postAnimal, deleteAnimal
            }
        }>
            {children}
        </AnimalContext.Provider>
    );
};

export {AnimalContext, AnimalProvider};
