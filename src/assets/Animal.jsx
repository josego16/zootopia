import '../css/Animal.css';

const Animal = ({species, locations, animal}) => {
    const showDescription = () => {
        return animal.description.length <= 100
            ? animal.description
            : animal.description.substring(0, 100) + '...';
    };
    const getSpecie = () => {
        const spe = species.find((specie) => specie.id === animal.id);
        if (spe) {
            return spe.name;
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
                <p><b>Especie: </b>{getSpecie()}</p>
                <p><b>Localizacion: </b>{getLocation()}</p>
                <p><b>Descripcion: </b>{showDescription()}</p>
            </div>
        </div>
    );
};

export default Animal;