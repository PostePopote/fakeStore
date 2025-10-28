import { useState } from "react";
import "./Productos.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);


  return (
    <div className="productos-container">
      <h2 className="productos-title">Lista de productos</h2>
      <div className="productos-grid">

          { /* Producto de ejemplo:
          <div className="producto-card">
            <img
              src={}
              alt={}
              className="producto-img"
            />
            <h3 className="producto-titulo">{}</h3>
            <p className="producto-categoria">{}</p>
            <p className="producto-precio">${}</p>
            <p className="producto-rating">
              ⭐
            </p>
          </div> */ }

      </div>
    </div>
  );
}
