import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Popup = ({setShowPopup}) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    category: "",
    stock: "",
    price: "",
    status: ""
  })

const handleChange = (e)=>{
  let name = e.target.name
  let value = e.target.value
  setForm({
    ...form,
    [name]:value
  })
}

const handleSubmit = (e)=>{
e.preventDefault()
toast.success("Product Added Successfully")
console.log("form data", form)
}
  return (
    <>
      {/* Backdrop Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
        
        {/* Modal Container */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
            <h3 className="text-lg font-semibold text-gray-800">Add New Product</h3>
            <button type='button' onClick={()=>setShowPopup(prev => !prev)} className="text-gray-400 hover:text-gray-600 transition-colors">✕</button>
          </div>

          {/* Form */}
          <form onSubmit={(e)=>handleSubmit(e)} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* ID Field */}
              <div className="col-span-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1" htmlFor="id">ID</label>
                <input required className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                  type="text" name='id' value={form.id} onChange={(e)=>handleChange(e)} placeholder='001' />
              </div>

              {/* Status Field */}
              <div className="col-span-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1" htmlFor="status">Status</label>
                <input required className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                  type="text" name='status' value={form.status} onChange={handleChange} placeholder='Active' />
              </div>
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1" htmlFor="name">Product Name</label>
              <input required className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                type="text" name='name' value={form.name} onChange={handleChange} placeholder='Enter product name' />
            </div>

            {/* Category Field */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1" htmlFor="category">Category</label>
              <input required className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                type="text" name='category' value={form.category} onChange={handleChange}placeholder='Electronics' />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Stock Field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1" htmlFor="stock">Stock</label>
                <input required className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                  type="number" name='stock' value={form.stock} onChange={handleChange} placeholder='Qty' />
              </div>

              {/* Price Field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1" htmlFor="price">Price</label>
                <input required className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                  type="number" name='price' value={form.price} onChange={handleChange} placeholder='$0.00' />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit"  className="w-full mt-2 bg-gray-900 text-white py-2.5 rounded-xl font-medium hover:bg-black transition-all shadow-lg active:scale-[0.98]">
              Save Product
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Popup