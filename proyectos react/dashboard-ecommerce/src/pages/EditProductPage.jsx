import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import { ProductsContext } from '../state/ProductsProvider'


export default function EditProductPage() {
const { productId } = useParams()
const navigate = useNavigate()
const { products, setProducts } = useContext(ProductsContext)
const [productData, setProductData] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(() => {
let mounted = true
const load = async () => {
setLoading(true)
setError(null)
try {
// Primero intentamos encontrarlo en el estado local (experiencia UX mejor)
const local = products.find((p) => Number(p.id) === Number(productId))
if (local) {
setProductData(local)
return
}


const res = await fetch(`https://dummyjson.com/products/${productId}`)
if (!res.ok) throw new Error('Producto no encontrado en API')
const data = await res.json()
if (!mounted) return
setProductData(data)
} catch (err) {
if (!mounted) return
setError(err.message || 'Error al cargar el producto')
} finally {
if (mounted) setLoading(false)
}
}


load()
return () => { mounted = false }
}, [productId, products])


const handleUpdate = (formData) => {
setProducts((prev) => prev.map((p) => (Number(p.id) === Number(productId) ? { ...p, ...formData, id: p.id } : p)))
navigate('/')
}


if (loading) return <div className="loader-container">Cargando datos del producto...</div>
if (error) return <div className="error-container"><div className="error-message">{error}</div></div>
if (!productData) return <div className="error-container">Producto no encontrado.</div>


return (
<div>
<div className="page-header">
<h1 className="page-title">Editar Producto</h1>
</div>
<ProductForm onSubmit={handleUpdate} initialData={productData} />
</div>
)
}