import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import { ProductsContext } from '../state/ProductsProvider'


export default function NewProductPage() {
const { setProducts } = useContext(ProductsContext)
const navigate = useNavigate()


const handleCreate = (formData) => {
const newProduct = { ...formData, id: Date.now() }
setProducts((prev) => [newProduct, ...prev])
navigate('/')
}


return (
<div>
<div className="page-header">
<h1 className="page-title">Agregar Producto</h1>
</div>
<ProductForm onSubmit={handleCreate} initialData={{ title: '', description: '', price: 0, category: '', thumbnail: '' }} />
</div>
)
}