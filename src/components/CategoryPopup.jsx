import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { X, FolderPlus, Info, Link2, Package, Activity } from 'lucide-react'

const CategoryPopup = ({ setShowPopUp }) => {
  const [category, setCategory] = useState({
    id: "",
    name: "",
    slug: "",
    products: "",
    status: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Category Added Successfully")
    console.log("categoryData", category)
    setShowPopUp(false) // Closing on submit
  }

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setCategory({
      ...category,
      [name]: value
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <FolderPlus size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 leading-none">Add New Category</h2>
              <p className="text-xs text-slate-500 mt-1.5">Create a new group for your product inventory</p>
            </div>
          </div>
          <button 
            onClick={() => setShowPopUp(false)}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={(e) => handleSubmit(e)} className="p-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="id" className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Info size={14} className="text-slate-400" /> Category ID
              </label>
              <input 
                name="id"
                type="number" 
                required 
                placeholder="e.g. 101"
                onChange={(e) => handleChange(e)} 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="status" className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Activity size={14} className="text-slate-400" /> Status
              </label>
              <input 
                name="status"
                type="text" 
                required 
                placeholder="Active / Inactive"
                onChange={(e) => handleChange(e)} 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Package size={14} className="text-slate-400" /> Category Name
            </label>
            <input 
              name="name"
              type="text" 
              required 
              placeholder="e.g. Electronics"
              onChange={(e) => handleChange(e)} 
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="slug" className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Link2 size={14} className="text-slate-400" /> URL Slug
            </label>
            <input 
              name="slug"
              type="text" 
              required 
              placeholder="e.g. electronics-gadgets"
              onChange={(e) => handleChange(e)} 
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="products" className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Package size={14} className="text-slate-400" /> Product Count
            </label>
            <input 
              name="products"
              type="text" 
              required 
              placeholder="Current item count"
              onChange={(e) => handleChange(e)} 
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white outline-none transition-all"
            />
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 mt-6">
            <button 
              type="button"
              onClick={() => setShowPopUp(false)}
              className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-200 active:scale-95 transition-all"
            >
              Save Category
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CategoryPopup