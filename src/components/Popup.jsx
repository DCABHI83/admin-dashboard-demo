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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form created successfully",form)
    toast.success("Product Added SuccessFully")
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
            <button onClick={()=>setShowPopup(prev => !prev)} className="text-gray-400 hover:text-gray-600 transition-colors">✕</button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* ID Field */}
              <div className="col-span-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1" htmlFor="id">ID</label>
                <input className="  w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                  type="text" required name='id' value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} placeholder='001' />
              </div>

              {/* Status Field */}
              <div className="col-span-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1" htmlFor="status">Status</label>
                <input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                  type="text" required name='status' value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} placeholder='Active' />
              </div>
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1" htmlFor="name">Product Name</label>
              <input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                type="text" required name='name' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder='Enter product name' />
            </div>

            {/* Category Field */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1" htmlFor="category">Category</label>
              <input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                type="text" required name='category' value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder='Electronics' />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Stock Field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1" htmlFor="stock">Stock</label>
                <input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                  type="text" name='stock' value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} placeholder='Qty' />
              </div>

              {/* Price Field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1" htmlFor="price">Price</label>
                <input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                  type="text" required name='price' value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder='$0.00' />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" onClick={()=>setShowPopup(prev => !prev)} className="w-full mt-2 bg-gray-900 text-white py-2.5 rounded-xl font-medium hover:bg-black transition-all shadow-lg active:scale-[0.98]">
              Save Product
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Popup