import React, { createContext, useEffect, useState } from 'react'


export const ProductsContext = createContext({ products: [], setProducts: () => {}, loading: false, error: null })


export function ProductsProvider({ children }) {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(() => {
let mounted = true
const load = async () => {
setLoading(true)
setError(null)
try {
const res = await fetch('https://dummyjson.com/products')
if (!res.ok) throw new Error('Error cargando productos')
const data = await res.json()
if (!mounted) return
setProducts(data.products || [])
} catch (err) {
if (!mounted) return
setError(err.message)
} finally {
if (mounted) setLoading(false)
}
}


load()
return () => { mounted = false }
}, [])


return (
<ProductsContext.Provider value={{ products, setProducts, loading, error }}>
{children}
</ProductsContext.Provider>
)
}