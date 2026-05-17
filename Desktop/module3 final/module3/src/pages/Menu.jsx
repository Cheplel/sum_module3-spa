import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://spa-final-backend.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-2 py-1 mb-4"
      />

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Menu;
