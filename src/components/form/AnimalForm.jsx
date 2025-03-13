import React, {useContext, useState} from 'react';
import {AnimalContext} from "../../context/AnimalContext.jsx";
import {useNavigate} from "react-router-dom";

const AnimalForm = () => {
    const [animal, setAnimal] = useState({
        name: '',
        scientific_name: '',
        kingdom: '',
        diet: '',
        species: '',
        countries: '',
        locations: '',
        description: '',
        image_url: ''
    })
    const [errorMessage, setErrorMessage] = useState('');
    const {getAnimals, postAnimal} = useContext(AnimalContext);
    const navigate = useNavigate();

    const handlechange = (event) => {
        const {name, value} = event.target;
        setAnimal({...animal, [name]: value});
        setErrorMessage('');
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (animal.name) {
            const response = await postAnimal(animal);
            if (response.ok) {
                await getAnimals();
                setErrorMessage('Animal añadido correctamente.');
                navigate('/animals');
            } else {
                setErrorMessage(response.message);
            }
        } else {
            setErrorMessage('El nombre del animal es obligatorio');
        }
    }
    return (
        <form onSubmit={handleSubmit} style={{border: "1px solid black", borderRadius: "20px", marginTop: "10px"}}>
            <div style={{padding: '10px', border: "1px solid black", margin: "10px"}}>
                <label htmlFor="name">Nombre: </label>
                <input type="text"
                       name="name" id="name"
                       value={animal.name} onChange={handlechange}/>
            </div>
            <div style={{padding: '10px', border: "1px solid black", margin: "10px"}}>
                <label htmlFor="scientific_name">Nombre Cientifico: </label>
                <input type="text"
                       name="scientific_name" id="scientific_name"
                       value={animal.scientific_name} onChange={handlechange}/>
            </div>
            <div style={{padding: '10px', border: "1px solid black", margin: "10px"}}>
                <label htmlFor="kingdom">Reino animal: </label>
                <input type="text"
                       name="kingdom" id="kingdom"
                       value={animal.kingdom} onChange={handlechange}/>
            </div>
            <div style={{padding: '10px', border: "1px solid black", margin: "10px"}}>
                <label htmlFor="diet">Alimentacion: </label>
                <input type="text"
                       name="diet" id="diet"
                       value={animal.diet} onChange={handlechange}/>
            </div>
            <div style={{padding: '10px', border: "1px solid black", margin: "10px"}}>
                <label htmlFor="species">Especie: </label>
                <input type="text"
                       name="species" id="species"
                       value={animal.species} onChange={handlechange}/>
            </div>
            <div style={{padding: '10px', border: "1px solid black", margin: "10px"}}>
                <label htmlFor="countries">Pais/Paises: </label>
                <input type="text"
                       name="countries" id="countries"
                       value={animal.countries} onChange={handlechange}/>
            </div>
            <div style={{padding: '10px', border: "1px solid black", margin: "10px"}}>
                <label htmlFor="name">Habitat/Habitats: </label>
                <input type="text"
                       name="locations" id="locations"
                       value={animal.locations} onChange={handlechange}/>
            </div>
            <div style={{padding: '10px', border: "1px solid black", margin: "10px"}}>
                <label htmlFor="description">Descripcion: </label>
                <input type="textArea"
                       name="description" id="description"
                       value={animal.description} onChange={handlechange}/>
            </div>
            <div style={{padding: '10px', border: "1px solid black", margin: "10px"}}>
                <label htmlFor="image_url">Imagen: </label>
                <input type="text"
                       name="image_url" id="image_url"
                       value={animal.image_url} onChange={handlechange}/>
            </div>
            <p style={{margin: "10px", padding: "10px", fontSize: "20px", color: "red"}}>{errorMessage}</p>
            <button type="submit" style={{padding: '10px', margin: "10px"}}>enviar</button>
        </form>
    );
};

export default AnimalForm;