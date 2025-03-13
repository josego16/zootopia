import '../css/Menus.css';

const MenuCountries = ({countries}) => {
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