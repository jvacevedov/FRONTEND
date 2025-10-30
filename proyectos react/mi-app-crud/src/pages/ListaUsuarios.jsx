import { Link } from "react-router-dom";

function ListaUsuarios({ usuarios, setUsuarios }) {
  // 🗑️ Función para eliminar usuario
  const eliminarUsuario = (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar este usuario?");
    if (confirmar) {
      setUsuarios(usuarios.filter((u) => u.id !== id));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Usuarios</h1>

      {/* 🔗 Enlace para crear nuevo usuario */}
      <Link to="/crear" style={{ display: "inline-block", marginBottom: "10px" }}>
        Crear Nuevo Usuario
      </Link>

      {/* 👥 Renderiza los usuarios */}
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id} style={{ marginBottom: "8px" }}>
            <strong>{usuario.nombre}</strong> - {usuario.correo}
            {" | "}
            {/* Enlace para editar */}
            <Link to={`/editar/${usuario.id}`}>Editar</Link>
            {" | "}
            {/* Botón eliminar */}
            <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
