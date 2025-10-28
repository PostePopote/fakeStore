import { useEffect, useState } from "react";
import "./Productos.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  const buscar = () => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProductos(data));
  }

useEffect(() => buscar,[])
console.log(productos)

  return (
    <div className="productos-container">
      <h2 className="productos-title">Lista de productos</h2>
      <div className="productos-grid">

          {productos.map((producto) => (
          <div className="producto-card">
            <img
              src={producto.image}
              alt={producto.title}
              className="producto-img"
            />
            <h3 className="producto-titulo">{producto.title}</h3>
            <p className="producto-categoria">{producto.category}</p>
            <p className="producto-precio">${producto.price}</p>
            <p className="producto-rating">
              ⭐
            </p>
          </div>  
))}
      </div>
    </div>
  );
}
