import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditarUsuario({ usuarios, setUsuarios }) {
  const { id } = useParams(); // 🧠 Obtiene el id de la URL
  const navigate = useNavigate();

  const usuarioEncontrado = usuarios.find((u) => u.id === Number(id));

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  // 🔄 useEffect: precarga los datos del usuario a editar
  useEffect(() => {
    if (usuarioEncontrado) {
      setNombre(usuarioEncontrado.nombre);
      setCorreo(usuarioEncontrado.correo);
    }
  }, [usuarioEncontrado]);

  const manejarSubmit = (e) => {
    e.preventDefault();

    const usuarioActualizado = {
      id: usuarioEncontrado.id,
      nombre,
      correo,
    };

    // 🧩 Actualiza el estado de usuarios
    setUsuarios(
      usuarios.map((u) => (u.id === usuarioActualizado.id ? usuarioActualizado : u))
    );

    navigate("/"); // vuelve a la lista
  };

  if (!usuarioEncontrado) {
    return <h2>Usuario no encontrado</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Editar Usuario</h1>

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
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default EditarUsuario;
