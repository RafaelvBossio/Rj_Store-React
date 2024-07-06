import React from "react";
import "../assets/css/productoTarjeta.css";
import "../assets/css/botones.css";

const ListaProductos = () => {
  return (
    <div className="contenedor_listaProductos">
      <ul className="lista_productos">
        <li className="lista__productos-producto">
          <form>
            <div className="producto__imagen-producto">
              <div>
                <a href="#">
                  <img src="https://serrania.co/cdn/shop/files/producto3.jpg?v=1685554804" />
                </a>
              </div>
              <div></div>
            </div>
            <div className="producto__info-producto">
              <div className="info-producto-info">
                <h3>Nombre producto</h3>
                <div className="tallas">
                  <p>Tallas:</p>
                  <div>
                    <label>
                      xl <input name="talla" type="radio" value="XL" />
                    </label>
                    <label>
                      l <input name="talla" type="radio" value="L" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="info-producto__botones">
                <button type="button" className="btn__agregar btn verde">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
            </div>
          </form>
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
