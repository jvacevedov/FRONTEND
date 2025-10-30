import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProductListPage from './pages/ProductListPage'
import NewProductPage from './pages/NewProductPage'
import EditProductPage from './pages/EditProductPage'
import NotFoundPage from './pages/NotFoundPage'


const sleep = (ms) => new Promise((r) => setTimeout(r, ms))


export default function App() {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(() => {
let mounted = true
const fetchProducts = async () => {
setLoading(true)
setError(null)
try {
// Simula retardo de carga
await sleep(800)
const willFail = Math.random() < 0.15 // baja probabilidad de fallo
if (willFail) throw new Error('Error simulado al cargar productos')


const res = await fetch('https://dummyjson.com/products')
if (!res.ok) throw new Error('Error al consultar la API')
const data = await res.json()
if (!mounted) return
setProducts(data.products || [])
} catch (err) {
if (!mounted) return
setError(err.message || 'Error desconocido')
} finally {
if (mounted) setLoading(false)
}
}


fetchProducts()
return () => { mounted = false }
}, [])


return (
<Routes>
<Route path="/" element={<Layout />}>
<Route index element={<ProductListPage />} />
<Route path="new" element={<NewProductPage />} />
<Route path="edit/:productId" element={<EditProductPage />} />
<Route path="*" element={<NotFoundPage />} />
</Route>
</Routes>
)
}