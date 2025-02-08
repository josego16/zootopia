export const getAnimals = async () => {
    try {
        const response = await fetch("http://localhost:3000/animals");
        return {error: false, data: await response.json()};
    } catch (error) {
        return {error: true, data: "No se ha podido descargar la lista de animales"};
    }
}
export const getSpecies = async () => {
    try {
        const response = await fetch("http://localhost:3000/species");
        return {error: false, data: await response.json()};
    } catch (error) {
        return {error: true, data: "No se ha podido cargar las especies"};
    }
}

export const getLocations = async () => {
    try {
        const response = await fetch("http://localhost:3000/locations");
        return {error: false, data: await response.json()};
    } catch (error) {
        return {error: true, data: "No se ha podido cargar los habitats"};
    }
}