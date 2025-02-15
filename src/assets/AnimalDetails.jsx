import '../css/AnimalDetails.css';

const AnimalDetails = ({animal, countries, locations, onClose}) => {
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
        <div className="animal-modal" onClick={onClose}>
            <div className="animal-modal-content" onClick={(event) => event.stopPropagation()}>
                <button className="animal-modal-close" onClick={onClose}>Cerrar</button>
                <h1 className="animal-modal-title">{animal.name}</h1>
                <img className="animal-modal-image" src={animal.image_url} alt={animal.name}/>
                <p className="animal-modal-text"><strong>Nombre científico: </strong>{animal.scientific_name}</p>
                <p className="animal-modal-text"><strong>Reino animal: </strong>{animal.kingdom}</p>
                <p className="animal-modal-text"><strong>Alimentación: </strong>{animal.diet}</p>
                <p className="animal-modal-text"><strong>Especie: </strong>{animal.species}</p>
                <p className="animal-modal-text"><strong>País: </strong>{getCountries()}</p>
                <p className="animal-modal-text"><strong>Hábitats: </strong>{getLocation()}</p>
                <p className="animal-modal-text"><strong>Descripción: </strong>{showDescription()}</p>
            </div>
        </div>
    );
};

export default AnimalDetails;