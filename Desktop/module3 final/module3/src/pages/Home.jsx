const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
                <div className="text-center space-y-8">
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-4">
                        Welcome to Our Restaurant
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 mb-8">
                        Enjoy the best food in town!
                    </p>
                    <div className="pt-8 space-y-6">
                        <p className="text-lg text-gray-700">
                            Discover our diverse menu featuring cuisines from around the world.
                        </p>
                        <a 
                            href="/menu" 
                            className="inline-block bg-orange-400 text-white px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors text-lg font-semibold"
                        >
                            Browse Menu
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;