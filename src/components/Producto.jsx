import React from "react";

function Producto({ dato }) {
  function Tallas() {
    const tallas = Object.keys(dato.tallas[0]);
    let lista = document.querySelector(".lista__tallas");

    
  }

  Tallas(dato);

  return (
    <div>
      <li className="lista__productos-producto">
        <form>
          <div className="producto__imagen-producto">
            <div>
              <img src={dato.fotos} />
            </div>
          </div>
          <div className="producto__info-producto">
            <div className="info-producto-info">
              <h3>
                <a className="nombre_producto" href="#">
                  {dato.nombre}
                </a>
              </h3>
              <p className="precio_producto">{dato.precio}</p>

              <div className="tallas">
                <p>Tallas:</p>
                <div className="lista__tallas">
                </div>
              </div>
            </div>
            <div className="info-producto__botones">
              <button type="button" className="btn__agregar btn verde">
                <p>comprar</p>
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </button>
              <button type="button" className="btn__agregar btn azul">
                <span className="material-symbols-outlined">
                  add_shopping_cart
                </span>
              </button>
            </div>
          </div>
        </form>
      </li>
    </div>
  );
}

export default Producto;
