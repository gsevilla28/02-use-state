import React, { useState } from "react";

export const MiPrimerEstado = () => {
  const [nombre, setNombre] = useState("Gerardo Sevilla");

  //   let nombre = "Gerardo Sevilla";

  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo);
  };

  return (
    <div>
      <h3>Componente: mi primer estado</h3>
      <strong>{nombre}</strong>
      &nbsp;
      <input
        onKeyUp={(e) => cambiarNombre(e, e.target.value)}
        type="text"
        name=""
        id=""
        placeholder="cambia el nombre"
      />
      <button onClick={(e) => cambiarNombre(e, "Francisco")}>Cambiar</button>
    </div>
  );
};
