export const SearchOptions = ({ searchTerm, setSearchTerm, searchCategory, setSearchCategory }) => {
    const handleReset = () => {
        setSearchTerm("");
        setSearchCategory("");
    };