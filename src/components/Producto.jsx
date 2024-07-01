import React from "react";
import { productosServicios } from "../assets/dbConection/servidor";

export default function Producto() {
  const mostrarProductos = (
    imagen,
    nombreProducto,
    precioProducto,
    id,
    categoria
  ) => {
    const producto = document.createElement("li");
    producto.classList.add("producto");
    const mostrarProducto = `
<div class="imagen-producto">
<a id="${id}" href="./producto.html?id=${id}?catg=${categoria}">
  <img src="${imagen}" alt="imagen de producto" />
</a>
<div class="controles">
  <i class="fa-solid fa-trash-can" id="eliminar"></i>
  <a href="../pages/editarProducto.html?id=${id}">
    <i class="fa-solid fa-pen-to-square" id="editar"></i>
  </a>
</div>
</div>
<div class="info-producto">
  <h4 class="nombre-producto">${nombreProducto}</h4>
  <p class="precio-producto">${precioProducto}</p>
</div>
`;

    galeriaProductos.appendChild(producto);
    producto.innerHTML = mostrarProducto;
  };

  return <div className="galeriaProductos"></div>;
}
