import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-orange-500">Frasa Hotel</h1>
                        <p className="text-gray-600 text-sm">Welcome! Proceed to the menu to place your order.</p>
                    </div>
                </div>
                <nav className="flex gap-6 border-t pt-4">
                    <Link 
                        to="/" 
                        className="text-gray-700 hover:text-orange-500 font-semibold transition-colors px-4 py-2 rounded hover:bg-orange-50"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/menu" 
                        className="text-gray-700 hover:text-orange-500 font-semibold transition-colors px-4 py-2 rounded hover:bg-orange-50"
                    >
                        Menu
                    </Link>
                    <Link 
                        to="/admin" 
                        className="text-gray-700 hover:text-orange-500 font-semibold transition-colors px-4 py-2 rounded hover:bg-orange-50"
                    >
                        Admin
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;