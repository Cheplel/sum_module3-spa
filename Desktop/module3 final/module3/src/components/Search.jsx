import ProductList from "./ProductList";


const Search = ({ searchTerm, setSearchTerm, searchCategory, setSearchCategory }) => {
    const handleReset = () => {
        setSearchTerm("");
        setSearchCategory("");
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
                <select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                >
                    <option value="">All Categories</option>
                    <option value="Kenyan">Kenyan</option>
                    <option value="Indian">Indian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Italian">Italian</option>
                </select>
                <button 
                    onClick={handleReset} 
                    className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Search;