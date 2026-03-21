import React, { useState } from 'react'

const Popup = () => {
  const [form,setForm] = useState({
    id:"",
    name:"",
    category:"",
    stock:"",
    price:"",
    status:""

  })
  const handleSubmit = ()=>{

  }
  return (
    <>
    <div>
        <form >
           <div>
             <label htmlFor="id">id</label>
            <input type="text" name='id' value={form.id} onChange={(e)=>setForm(e.target.value)} placeholder='Enter Id' />
            <label htmlFor="name">name</label>
            <input type="text" name='name' value={form.name} onChange={(e)=>setForm(e.target.value)} placeholder='Enter the name of the product' />
            <label htmlFor="category">Category</label>
            <input type="text" name='category' value={form.category} onChange={(e)=>setForm(e.target.value)} placeholder='Enter the Category' />
            <label htmlFor="stock">Stock</label>
            <input type="text" name='stock' value={form.stock} onChange={(e)=>setForm(e.target.value)} placeholder='Enter Stock' />
            <label htmlFor="price">Price</label>
            <input type="text" name='price' value={form.price} onChange={(e)=>setForm(e.target.value)} placeholder='Enter Price' />
            <label htmlFor="status">Status</label>
            <input type="text" name='status' value={form.status} onChange={(e)=>setForm(e.target.value)} placeholder='Enter Status' />
           </div>
           <button onClick={handleSubmit
            
           }>Submit</button>
        </form>
    </div>
    
    </>
  )
}

export default Popup