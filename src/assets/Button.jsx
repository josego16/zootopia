import {deleteAnimal} from "../api/Api.jsx";
import '../css/Button.css';

const Button = ({animal, onDeleteAnimal}) => {
    const delAnimal = async () => {
        const response = await deleteAnimal(animal);
        if (!response.error) {
            onDeleteAnimal(animal);
        }
    }
    return (
        <button className="button" onClick={delAnimal}>Borrar animal</button>
    );
};

export default Button;