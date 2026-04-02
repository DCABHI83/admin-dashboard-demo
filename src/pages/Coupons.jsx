import React, { useState } from 'react'
import { Search, Ticket, MoreHorizontal, Percent, Banknote, Plus, Calendar } from 'lucide-react';
import CategoryPopup from '../components/CategoryPopup';
import CouponPopup from '../components/CouponPopup';

const Coupons = () => {
  const [searchTerm, SetSearchTerm] = useState("")
  const [showPopUp,setShowPopUp] = useState(false)


  const coupons = [
    { id: "CPN10", code: "SAVE10", discountType: "percentage", discountValue: 10, minOrderAmount: 500, maxDiscount: 200, usageLimit: 100, usedCount: 45, status: "Active", expiryDate: "2026-04-01" },
    { id: "CPN20", code: "FLAT200", discountType: "flat", discountValue: 200, minOrderAmount: 1000, maxDiscount: null, usageLimit: 50, usedCount: 20, status: "Active", expiryDate: "2026-03-30" },
    { id: "CPN30", code: "WELCOME15", discountType: "percentage", discountValue: 15, minOrderAmount: 300, maxDiscount: 150, usageLimit: 200, usedCount: 180, status: "Inactive", expiryDate: "2026-03-10" },
    { id: "CPN40", code: "FESTIVE50", discountType: "flat", discountValue: 50, minOrderAmount: 200, maxDiscount: null, usageLimit: 500, usedCount: 120, status: "Active", expiryDate: "2026-05-01" }
  ];

  const fileteredCoupons = coupons.filter((cpn) =>
    cpn.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cpn.discountType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cpn.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {
        showPopUp && <CouponPopup setShowPopUp={setShowPopUp} />
      }
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Coupons & Promotions</h1>
          <p className="text-sm text-slate-500 mt-1">Manage discount codes and marketing campaigns</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search by code or type..."
              value={searchTerm}
              onChange={(e) => SetSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 w-64 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white transition-all"
            />
          </div>
          <button onClick={()=>setShowPopUp(true)} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-900/20">
            <Plus size={18} />
            Create Coupon
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Coupon Details</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">Value</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Conditions</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Usage</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {fileteredCoupons.length > 0 ? (
              fileteredCoupons.map((elem) => (
                <tr key={elem.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                        <Ticket size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-black text-slate-900 tracking-tight">{elem.code}</div>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-1 font-medium">
                           <Calendar size={12} /> Exp: {elem.expiryDate}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                      {elem.discountType === 'percentage' ? <Percent size={12} /> : '₹'}
                      {elem.discountValue}{elem.discountType === 'percentage' ? '%' : ''}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-xs space-y-1">
                       <div className="text-slate-600 font-medium">Min Order: <span className="text-slate-900">₹{elem.minOrderAmount}</span></div>
                       <div className="text-slate-400 text-[10px]">Max Cap: {elem.maxDiscount ? `₹${elem.maxDiscount}` : 'Unlimited'}</div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="w-32">
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1.5">
                        <span>{elem.usedCount} used</span>
                        <span>{Math.round((elem.usedCount / elem.usageLimit) * 100)}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                         <div 
                           className={`h-full rounded-full transition-all ${
                             (elem.usedCount / elem.usageLimit) > 0.8 ? 'bg-amber-500' : 'bg-indigo-500'
                           }`} 
                           style={{ width: `${(elem.usedCount / elem.usageLimit) * 100}%` }}
                         />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border flex items-center gap-1.5 w-fit ${
                      elem.status === "Active" 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100" 
                        : "bg-slate-50 text-slate-500 border-slate-200"
                    }`}>
                      <div className={`w-1 h-1 rounded-full ${elem.status === "Active" ? "bg-emerald-500" : "bg-slate-400"}`} />
                      {elem.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                      <Ticket size={24} />
                    </div>
                    <p className="text-slate-900 font-bold">No coupons found</p>
                    <p className="text-slate-500 text-sm">No promotional codes match your search criteria.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Coupons