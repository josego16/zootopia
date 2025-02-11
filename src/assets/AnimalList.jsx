import '../css/AnimalList.css';
import {useEffect, useState} from "react";
import {getAnimals} from "../api/Api.jsx";
import Animal from "./Animal.jsx";

const AnimalList = ({countries, locations, animals, setAnimals, onDeleteAnimal}) => {
    const [serverError, setserverError] = useState({error: false, message: ""});

    const downloadAnimals = async () => {
        const response = await getAnimals();
        if (!response.error) {
            setAnimals(response.data);
        } else {
            setAnimals([]);
            setserverError(response.data);
        }
    }
    useEffect(() => {
        downloadAnimals();
    }, []);
    return (
        <div className="animal-list">
            {animals.length === 0 ? <p>No se han encontrado animales</p> : ""}
            {serverError ? <p>{serverError.message}</p> : ""}
            {
                animals.map(animal =>
                    <Animal key={animal.id} countries={countries} locations={locations} animal={animal}
                            onDeleteAnimal={onDeleteAnimal}/>
                )
            }
        </div>
    );
};

export default AnimalList;