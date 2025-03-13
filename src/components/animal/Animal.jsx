import '../../css/Animal.css';
import '../../css/Button.css';
import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AnimalContext} from "../../context/AnimalContext.jsx";

const Animal = ({animal, onDelete}) => {
    const {countries, locations} = useContext(AnimalContext);

    const showDescription = () => {
        return animal.description.length <= 100
            ? animal.description
            : animal.description.substring(0, 100) + '...';
    };

    const showCountry = () => {
        const coun = countries.filter((country) => animal.countries.includes(country.id));
        if (coun) {
            return coun.map(country => country.name).join(', ');
        } else {
            return "No clasificado";
        }
    };

    const showLocation = () => {
        const local = locations.filter((location) => animal.locations.includes(location.id));
        if (local) {
            return local.map(location => location.name).join(', ');
        } else {
            return "No clasificado";
        }
    };
    return (
        <div className="animal-top">
            <h1>
                <Link to={`/animals/${animal.id}`}>{animal.name}</Link>
            </h1>
            <img src={animal.image_url} alt={animal.name}/>
            <div className="animal-bottom">
                <p><b>Paises: </b>{animal.countries ? showCountry() : 'No encontrado'}</p>
                <p><b>Habitats: </b>{animal.locations ? showLocation() : 'No encontrado'}</p>
                <p><b>Descripcion: </b>{showDescription()}</p>
            </div>
            <button className="button" onClick={() => onDelete(animal.id)}>borrar</button>
        </div>
    );
};

export default Animal;