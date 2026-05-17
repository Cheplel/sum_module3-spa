export default function ProductList({ products = [] }) {
console.log(products)

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.origin}</p>
                    <p>${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
}