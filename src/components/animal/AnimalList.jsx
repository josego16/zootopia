import '../../css/AnimalList.css';
import {useContext, useEffect} from "react";
import Animal from "./Animal.jsx";
import {AnimalContext} from "../../context/AnimalContext.jsx";

const AnimalList = () => {
    const {animals, getAnimals, deleteAnimal} = useContext(AnimalContext);
    useEffect(() => {
        getAnimals();
    }, []);

    return (
        <div className="animal-list">
            {animals.length === 0 ? <p>No se han encontrado animales</p> : ""}
            {
                animals.map(
                    animal => <Animal key={animal.id} animal={animal} onDelete={deleteAnimal}/>
                )
            }
        </div>
    );
};

export default AnimalList;