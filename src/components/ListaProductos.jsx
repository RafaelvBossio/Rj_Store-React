import { useEffect, useState } from "react";
import Producto from "../components/Producto.jsx";
import "../assets/css/productoTarjeta.css";
import "../assets/css/botones.css";

const ListaProductos = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/RafaelvBossio/dbJson/productos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="contenedor_listaProductos">
      <ul className="lista_productos">
        {data?.map((datos) => (
          <Producto key={datos.id} dato={datos}/>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;
