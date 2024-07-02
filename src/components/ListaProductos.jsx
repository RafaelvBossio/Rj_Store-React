import React from "react";
import "../assets/css/productoTarjeta.css";

const ListaProductos = () => {
  return (
    <div className="contenedor_listaProductos">
      <ul className="lista_productos">
        <li className="lista__productos-producto">
          <div className="producto__imagen-producto">
            <img src="https://media.gq.com.mx/photos/62ed694ef84edeef239b60b9/1:1/w_1428,h_1428,c_limit/ropa-basica-barata-para-hombre-cual-es-como-comprar.jpg"></img>
          </div>
          <div className="producto__info-producto">
            <h3>Nombre producto</h3>
            <div className="info-producto__botones">
              <button className="btn__agregar">
                <span class="material-symbols-outlined">add_shopping_cart</span>
              </button>
            </div>
          </div>
        </li>

        <li className="lista__productos-producto">
          <div className="producto__imagen-producto">
            <img src=""></img>
          </div>
          <div className="producto__info-producto">
            <h3>Nombre producto</h3>
            <div className="info-producto__botones"></div>
          </div>
        </li>

        <li className="lista__productos-producto">
          <div className="producto__imagen-producto">
            <img src=""></img>
          </div>
          <div className="producto__info-producto">
            <h3>Nombre producto</h3>
            <div className="info-producto__botones"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListaProductos;
