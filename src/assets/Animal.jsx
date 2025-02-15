import '../css/Animal.css';
import Button from "./Button.jsx";

const Animal = ({countries, locations, animal, onDeleteAnimal, onOpenModal}) => {
    const showDescription = () => {
        return animal.description.length <= 100
            ? animal.description
            : animal.description.substring(0, 100) + '...';
    };

    const getCountries = () => {
        const coun = countries.filter((country) => animal.countries.includes(country.id));
        if (coun) {
            return coun.map(country => country.name).join(', ');
        } else {
            return "No clasificado";
        }
    };

    const getLocation = () => {
        const local = locations.filter((location) => animal.locations.includes(location.id));
        if (local) {
            return local.map(location => location.name).join(', ');
        } else {
            return "No clasificado";
        }
    };
    return (
        <div className="animal-top">
            <h1>{animal.name}</h1>
            <img src={animal.image_url}
                 alt={animal.name}
                 onClick={() => onOpenModal(animal)}
            />
            <div className="animal-bottom">
                <p><b>Pais: </b>{getCountries()}</p>
                <p><b>Localización: </b>{getLocation()}</p>
                <p><b>Descripción: </b>{showDescription()}</p>
            </div>
            <Button animal={animal} onDeleteAnimal={onDeleteAnimal}/>
        </div>
    );
};

export default Animal;