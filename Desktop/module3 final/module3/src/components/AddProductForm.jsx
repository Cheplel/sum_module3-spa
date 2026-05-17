import React, { useState } from "react";

const AddProductForm = ({ products, setProducts }) => {
    const [name, setName] = useState("");
    const [origin, setOrigin] = useState("Kenyan");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price) {
        alert("Please fill in all fields");
        return;
    }

    const newProduct = {
        name,
        origin,
        price: parseFloat(price),
    };

    try {
        const response = await fetch("https://spa-final-backend.onrender.com/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct),
        });

        const savedProduct = await response.json();

        setProducts([...products, savedProduct]);

        setName("");
        setOrigin("Kenyan");
        setPrice("");
    } catch (error) {
        console.error("Error adding product:", error);
    }
};

}

export default AddProductForm;