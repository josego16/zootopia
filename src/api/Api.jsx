export const getAnimals = async () => {
    try {
        const response = await fetch("http://localhost:3000/animals");
        return {error: false, data: await response.json()};
    } catch (error) {
        return {error: true, data: "No se ha podido descargar la lista de animales"};
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

export const getCountries = async () => {
    try {
        const response = await fetch("http://localhost:3000/countries");
        return {error: false, data: await response.json()};
    } catch (error) {
        return {error: true, data: "No se ha podido cargar las eCountries"};
    }
}
export const deleteAnimal = async (animal) => {
    const response = await fetch("http://localhost:3000/animals/" + animal.id, {
        method: "DELETE"
    });

    if (response.status === 200) {
        return {error: false}
    } else {
        return {error: true, data: "No se ha podido borrar el animal"};
    }
}