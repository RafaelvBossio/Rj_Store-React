import { React, Component } from "react";
import "../assets/css/headerPrincipal.css";
import "../App.css";
import "../index.css";

export default class HeaderPrincipal extends Component {
  render() {
    window.onload = () => {
      let botonmenu = document.getElementById("menuDisponible");
      botonmenu.onclick = mostrar;

      function mostrar() {
        let menu = document.querySelector(".categ");

        if (menu.classList.contains("mostrar")) {
          menu.classList.remove("mostrar");
          this.firstChild.nodeValue = "menu";
        } else {
          menu.classList.add("mostrar");
          this.firstChild.nodeValue = "close";
        }
      }
    };

    return (
      <>
        <header className="header">
          <nav className="menu">
            <div id="logo" className="logo"></div>
            <div className="categ">
              <ul className="categ__rutas">
                <li className="categ__rutas--item">
                  <a className="btn negro" href="#">
                    <p>
                      hombre
                      <span className="material-symbols-outlined">
                        arrow_forward_ios
                      </span>
                    </p>
                  </a>
                </li>
                <li className="categ__rutas--item">
                  <a className="btn negro" href="#">
                    <p>
                      mujer
                      <span className="material-symbols-outlined">
                        arrow_forward_ios
                      </span>
                    </p>
                  </a>
                </li>
                <li className="categ__rutas--item">
                  <a className="btn negro" href="#">
                    <p>
                      niño
                      <span className="material-symbols-outlined">
                        arrow_forward_ios
                      </span>
                    </p>
                  </a>
                </li>
                <li className="categ__rutas--item">
                  <a className="btn negro" href="#">
                    <p>
                      niña
                      <span className="material-symbols-outlined">
                        arrow_forward_ios
                      </span>
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="btn negro navB">
              <span id="menuDisponible" className="material-symbols-outlined">
                menu
              </span>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
