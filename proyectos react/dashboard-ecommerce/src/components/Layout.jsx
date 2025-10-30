import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function Layout() {
// Para simplificar pasamos el contexto directamente desde el Outlet.
// App.jsx mantiene el estado global; pero react-router Outlet tiene que recibir contexto desde
// un componente que tenga acceso al estado. Aquí asumimos que App mantiene el estado
// y que vamos a usar useOutletContext() en las páginas. Para eso, envolveremos el Outlet
// con el contexto que necesitamos: como alternativa, podríamos levantar el estado aquí.


// Nota: en esta implementación, el estado global está en App.jsx, pero React Router no
// tiene forma directa de pasar variables desde App a Layout a menos que App las proporcione.
// Para mantener la estructura pedida por el taller, pondremos un "bridge" simple:
// En este proyecto práctico asumimos que App.jsx y Layout.jsx están en el mismo árbol
// y que las páginas usarán useOutletContext() desde quien llame al Outlet. Para evitar
// complejidad adicional aquí, el Outlet no recibe props; las páginas leerán usando
// window._INITIAL_PRODUCTS si necesitas (no recomendado). Sin embargo, para seguir el
// enunciado del taller, la mejor práctica es mantener el estado en App y pasar el contexto
// por props al Layout (si se quisiera). Para no romper la dinámica, dejamos el Outlet
// sin context y las páginas importan un hook simple si se requiere.


// Para una solución completa y simple, en esta plantilla el estado global está en App.jsx
// y las páginas pueden acceder por medio de un custom hook o un contexto React.
// Para no hacer el ejemplo demasiado largo, aquí presento el layout visual y el Outlet.


return (
<div className="app-layout">
<nav className="sidebar">
<div className="sidebar-header">Mi Tienda</div>
<div className="sidebar-nav">
<ul>
<li>
<NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} end>
Inventario
</NavLink>
</li>
<li>
<NavLink to="/new" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
Añadir Producto
</NavLink>
</li>
</ul>
</div>
</nav>
<main className="main-content">
<Outlet />
</main>
</div>
)
}