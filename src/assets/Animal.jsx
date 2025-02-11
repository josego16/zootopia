import '../css/Animal.css';
import Button from "./Button.jsx";

const Animal = ({countries, locations, animal, onDeleteAnimal}) => {
    const showDescription = () => {
        return animal.description.length <= 100
            ? animal.description
            : animal.description.substring(0, 100) + '...';
    };
    const getCountries = () => {
        const cy = countries.find((country) => country.id === animal.id);
        if (cy) {
            return cy.name;
        } else {
            return "No clasificado";
        }
    }
    const getLocation = () => {
        const loc = locations.find((location) => location.id === animal.id);
        if (loc) {
            return loc.name;
        } else {
            return "No clasificado";
        }
    }
    return (
        <div className="animal-top">
            <h1>{animal.name}</h1>
            <img src={animal.image_url} alt={animal.name}/>
            <div className="animal-bottom">
                <p><b>Pais: </b>{getCountries()}</p>
                <p><b>Localizacion: </b>{getLocation()}</p>
                <p><b>Descripcion: </b>{showDescription()}</p>
            </div>
            <Button animal={animal} onDeleteAnimal={onDeleteAnimal}/>
        </div>
    );
};

export default Animal;