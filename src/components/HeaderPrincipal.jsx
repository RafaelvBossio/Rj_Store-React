import { React, Component} from "react";
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
                  <a href="#">
                    <div></div>
                    <p>hombre</p>
                  </a>
                </li>
                <li className="categ__rutas--item">
                  <a href="#">
                    <div></div>
                    <p>mujer</p>
                  </a>
                </li>
                <li className="categ__rutas--item">
                  <a href="#">
                    <div></div>
                    <p>niño</p>
                  </a>
                </li>
                <li className="categ__rutas--item">
                  <a href="#">
                    <div></div>
                    <p>niña</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="btn blanco navB">
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
