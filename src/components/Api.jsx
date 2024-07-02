import { useEffect, useState } from "react";
import React from "react";

const Api = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/RafaelvBossio/dbJson/productos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="api">
      <h1>Fetch Like a PRO</h1>
      <div className="card">
        <ul>
            {data?.map((productos) => (<li key={productos.id}><a href={productos.fotos} target="_blank">{productos.fotos}</a></li>))}
        </ul>
      </div>
    </div>
  );
};

export default Api;
