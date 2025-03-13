import React, {useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AnimalContext} from "../../context/AnimalContext.jsx";
import '../../css/Modal.css';

const AnimalDetail = () => {
    const {id} = useParams();
    const {animals} = useContext(AnimalContext);
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1);
    }

    const animal = animals.find((animal) => animal.id === id);

    if (!animal) {
        return <p>Cargando animales...</p>;
    }
    return (
        <div className="modal-backdrop" onClick={(event) => event.stopPropagation()}>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                <h1 className="animal-title">{animal.name}</h1>
                <div className="detail-container">
                    <img
                        src={animal.image_url}
                        alt={animal.name}
                        className="animal-image"
                    />
                    <div className="animal-details">
                        <p><b>Nombre Científico:</b> {animal.scientific_name}</p>
                        <p><b>Reino animal:</b> {animal.kingdom}</p>
                        <p><b>Alimentación:</b> {animal.diet}</p>
                        <p><b>Especie:</b> {animal.species}</p>
                        <p><b>País/Paises:</b> {animal.countries}</p>
                        <p><b>Habitat/Habitats:</b> {animal.locations}</p>
                        <p><b>Descripción:</b> {animal.description}</p>
                    </div>
                </div>
                <button className="close-btn" onClick={handleClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default AnimalDetail;