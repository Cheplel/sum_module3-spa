import { useState } from "react";
import AddProductForm from "../components/AddProductForm";
import  ProductList from "../components/ProductList";

const Admin = () => {
    const [products, setProducts] = useState([]);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h1 className="text-5xl font-bold mb-12 text-gray-800">Admin Panel</h1>
                
                <AddProductForm products={products} setProducts={setProducts} />
                
                <div className="bg-white rounded-lg shadow-md p-8 overflow-x-auto">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Product List</h2>
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2 border-gray-300">
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Origin</th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-b hover:bg-orange-50 transition-colors">
                                    <td className="py-4 px-4 text-gray-800">{product.name}</td>
                                    <td className="py-4 px-4 text-gray-800">{product.origin}</td>
                                    <td className="py-4 px-4 text-gray-800 font-semibold text-orange-500">${product.price.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;