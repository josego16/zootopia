import '../css/SearchBar.css';

const SearchBar = ({search, setSearch, animals, setFilteredAnimals}) => {
    const filterAnimals = (searchText) => {
        if (!searchText.trim()) {
            setFilteredAnimals(animals);
            return;
        }

        const filtered = animals.filter(({name, description}) =>
            (name && name.toLowerCase().includes(searchText.toLowerCase())) ||
            (description && description.toLowerCase().includes(searchText.toLowerCase()))
        );

        setFilteredAnimals(filtered);
    };

    const handleInputChange = (event) => {
        const newSearch = event.target.value;
        setSearch(newSearch);
        filterAnimals(newSearch);
    };

    return (
        <div className="search-bar">
            <label>Buscar un animal:<input
                type="text"
                value={search}
                onChange={handleInputChange}
                placeholder="Escribe para buscar un animal"
            /></label>
        </div>
    );
};

export default SearchBar;