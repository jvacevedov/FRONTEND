import React, { useContext } from 'react'
import { Link, useOutletContext } from 'react-router-dom'


// Para mantener el state global simple, asumimos que App.jsx expone un objeto global
// mediante window.__APP_STATE__ (no ideal). Pero para simplicidad y siguiendo el
// enunciado del taller, implementaremos un pequeño Context aquí.


import { ProductsContext } from '../state/ProductsProvider'


export default function ProductListPage() {
const { products, setProducts, loading, error } = useContext(ProductsContext)


const handleDelete = (id) => {
if (!window.confirm('¿Estás seguro(a) de eliminar este producto?')) return
setProducts((prev) => prev.filter((p) => p.id !== id))
}


if (loading) return <div className="loader-container">Cargando productos...</div>
if (error) return <div className="error-container"><div className="error-message">{error}</div></div>


return (
<div>
<div className="page-header">
<h1 className="page-title">Inventario</h1>
<Link to="/new" className="btn btn-primary">Añadir Producto</Link>
</div>


<div className="product-table-wrapper">
<table className="product-table">
<thead>
<tr>
<th>Imagen</th>
<th>Nombre</th>
<th>Categoría</th>
<th>Precio</th>
<th>Acciones</th>
</tr>
</thead>
<tbody>
{products.map((p) => (
<tr key={p.id}>
<td>
<img alt={p.title} src={p.thumbnail || (p.images && p.images[0])} className="product-thumbnail" />
</td>
<td>{p.title}</td>
<td>{p.category}</td>
<td>${p.price}</td>
<td>
<div className="product-actions">
<Link to={`/edit/${p.id}`} className="btn-link btn-edit">Editar</Link>
<button onClick={() => handleDelete(p.id)} className="btn-delete">Eliminar</button>
</div>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
)
}