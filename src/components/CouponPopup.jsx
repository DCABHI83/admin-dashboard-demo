import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { X, Ticket, Percent, ShieldCheck, Activity, Save } from 'lucide-react'

const CouponPopup = ({ setShowPopUp }) => {
  const [coupon, setCoupon] = useState({
    name: "",
    value: "",
    conditions: "",
    status: "Active"
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("coupon data", coupon)
    toast.success("Coupon Created Successfully")
    setShowPopUp(false) // Close modal on success
  }

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setCoupon({
      ...coupon,
      [name]: value
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
              <Ticket size={22} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 leading-none">Create Coupon</h2>
              <p className="text-xs text-slate-500 mt-1.5">Set up a new discount for your customers</p>
            </div>
          </div>
          <button 
            onClick={() => setShowPopUp(false)}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          {/* Coupon Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Ticket size={14} className="text-slate-400" /> Coupon Code
            </label>
            <input 
              type="text" 
              name="name" 
              placeholder="e.g. SUMMER50"
              value={coupon.name} 
              required 
              onChange={handleChange} 
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Discount Value */}
            <div className="space-y-2">
              <label htmlFor="value" className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Percent size={14} className="text-slate-400" /> Value
              </label>
              <input 
                type="text" 
                name="value" 
                placeholder="e.g. 15%"
                value={coupon.value} 
                required 
                onChange={handleChange} 
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
              />
            </div>

            {/* Status Selection */}
            <div className="space-y-2">
              <label htmlFor="status" className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Activity size={14} className="text-slate-400" /> Status
              </label>
              <select 
                name="status" 
                value={coupon.status}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white outline-none transition-all font-medium appearance-none cursor-pointer"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Usage Conditions */}
          <div className="space-y-2">
            <label htmlFor="conditions" className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <ShieldCheck size={14} className="text-slate-400" /> Usage Conditions
            </label>
            <input 
              type="text" 
              name="conditions" 
              placeholder="e.g. Min order ₹500"
              value={coupon.conditions} 
              required 
              onChange={handleChange} 
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
            />
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 mt-6">
            <button 
              type="button" 
              onClick={() => setShowPopUp(false)}
              className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Discard
            </button>
            <button 
              type="submit" 
              className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-200 active:scale-95 transition-all"
            >
              <Save size={18} />
              Save Coupon
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CouponPopup