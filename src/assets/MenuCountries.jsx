import '../css/Menus.css';
import {useContext} from "react";
import {AnimalContext} from "../context/AnimalContext.jsx";

const MenuCountries = () => {
    const {countries} = useContext(AnimalContext);
    return (
        <div className="menu-container">
            <p className="menu-title">Menú de Países</p>
            <div className="menu-list">
                {countries.map((country) => (
                    <label key={country.id} className="menu-item">
                        <input type="checkbox" className="menu-checkbox"/> {country.name}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default MenuCountries;