import './App.css'
import { Routes, Route, data } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Admin from './pages/Admin'
import Header from './components/Header'
import Layout from './pages/Layout'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
  fetch("https://spa-final-backend.onrender.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched products:", data);
      setProducts(data);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
}, []);
  return (
    <>
      <Header />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/menu"
            element={<Menu products={products} />}
          />

          <Route
            path="/admin"
            element={
              <Admin
                products={products}
                setProducts={setProducts}
              />
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App