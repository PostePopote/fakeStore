import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Especifico() {
const { id } = useParams();
const [producto, setProducto] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
        if (!response.ok) throw new Error("Error al cargar el producto");
        return response.json();
    })

    .then((data) => setProducto(data))
    .catch((error) => {
        console.error("Error al cargar el producto:", error);
        setError(error.message);
    });
}, [id]);

if (error) {
    return <p className="error">{error}</p>;
}

return (
    <div className="productos-container">
    <h2 className="productos-title">Detalles del producto seleccionado</h2>

    <div className="producto-card">
        <img
        src={producto?.image}
        alt={producto?.title}
        className="producto-img"
        />
        <h3 className="producto-titulo">{producto?.title}</h3>

        <p className="producto-categoria">
        <strong>Categoría:</strong> {producto?.category}
        </p>

        <p className="producto-descripcion">{producto?.description}</p>

        <p className="producto-precio">
        <strong>Precio:</strong> ${producto?.price}
        </p>

        <p className="producto-rating">
        ⭐ {producto?.rating.rate} / 5 - ({producto?.rating.count} valoraciones)
        </p>
    </div>
    </div>
);
}
