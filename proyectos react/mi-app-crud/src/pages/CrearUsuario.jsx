import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CrearUsuario({ usuarios, setUsuarios }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const navigate = useNavigate();

  const manejarSubmit = (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      id: Date.now(),
      nombre,
      correo,
    };

    setUsuarios([...usuarios, nuevoUsuario]);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Crear Nuevo Usuario</h1>
      <form onSubmit={manejarSubmit}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Correo: </label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Guardar
        </button>
      </form>
    </div>
  );
}

export default CrearUsuario;
