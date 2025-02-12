import '../css/Menus.css';

const MenuLocations = ({locations}) => {
    return (
        <div className="menu-container">
            <p className="menu-title">Menú de Hábitats</p>
            <div className="menu-list">
                {locations.map((location) => (
                    <label key={location.id} className="menu-item">
                        <input type="checkbox" className="menu-checkbox"/> {location.name}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default MenuLocations;