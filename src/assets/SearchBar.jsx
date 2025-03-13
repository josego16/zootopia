import '../css/SearchBar.css';
import React from "react";

const SearchBar = ({search, setSearch}) => {
    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="search-bar">
            <label>
                Buscar un animal:
                <input
                    type="text"
                    value={search}
                    onChange={handleInputChange}
                    placeholder="Escribe para buscar un animal"
                />
            </label>
        </div>
    );
};

export default SearchBar;