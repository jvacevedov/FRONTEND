import React, { useEffect, useState } from 'react'


export default function ProductForm({ initialData = {}, onSubmit, isLoading = false }) {
const [formData, setFormData] = useState({
title: '',
description: '',
price: 0,
category: '',
thumbnail: '',
...initialData,
})


useEffect(() => {
setFormData({ title: '', description: '', price: 0, category: '', thumbnail: '', ...initialData })
}, [initialData])


const handleChange = (e) => {
const { name, value } = e.target
setFormData((s) => ({ ...s, [name]: name === 'price' ? Number(value) : value }))
}


const submit = (e) => {
e.preventDefault()
onSubmit(formData)
}


return (
<div className="form-container">
<form onSubmit={submit}>
<div className="form-group">
<label>Título</label>
<input name="title" value={formData.title} onChange={handleChange} className="form-control" required />
</div>
<div className="form-group">
<label>Descripción</label>
<textarea name="description" value={formData.description} onChange={handleChange} className="form-control" />
</div>
<div className="form-group">
<label>Precio</label>
<input type="number" name="price" value={formData.price} onChange={handleChange} className="form-control" required />
</div>
<div className="form-group">
<label>Categoría</label>
<input name="category" value={formData.category} onChange={handleChange} className="form-control" />
</div>
<div className="form-group">
<label>URL Imagen (thumbnail)</label>
<input name="thumbnail" value={formData.thumbnail} onChange={handleChange} className="form-control" />
</div>


<div style={{ display: 'flex', gap: '0.5rem' }}>
<button type="submit" className="btn btn-primary" disabled={isLoading}>
{isLoading ? 'Guardando...' : 'Guardar'}
</button>
</div>
</form>
</div>
)
}