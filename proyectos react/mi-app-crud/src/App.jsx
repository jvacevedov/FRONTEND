import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaUsuarios from "./pages/ListaUsuarios";
import CrearUsuario from "./pages/CrearUsuario";
import EditarUsuario from "./pages/EditarUsuario";

function App() {
  // Estado principal
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Ana García", correo: "ana@email.com" },
    { id: 2, nombre: "Carlos López", correo: "carlos@email.com" },
  ]);

  return (
    <BrowserRouter>



      <Routes>
        {/* Ruta principal: lista */}
        <Route
          path="/"
          element={<ListaUsuarios usuarios={usuarios} />}
        />

        {/* Ruta para crear usuario */}
        <Route
          path="/crear"
          element={<CrearUsuario usuarios={usuarios} setUsuarios={setUsuarios} />}
        />

        {/* Ruta para editar usuario */}
        <Route
          path="/editar/:id"
          element={<EditarUsuario usuarios={usuarios} setUsuarios={setUsuarios} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
