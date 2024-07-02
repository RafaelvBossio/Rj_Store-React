import "./App.css";
import './index.css'
import "./assets/css/normalize.css";
import "./assets/css/botones.css";
import HeaderPrincipal from "./components/HeaderPrincipal.jsx";
import Api from "./components/Api.jsx";
import ListaProductos from "./components/ListaProductos.jsx";

function App() {

  return (
    <>
      <HeaderPrincipal />
      <ListaProductos />
    </>
  );
}

export default App;