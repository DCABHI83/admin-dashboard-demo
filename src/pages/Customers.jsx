import React, { useState } from 'react'
import { Search, User, Mail, Phone, MapPin, MoreHorizontal, UserX, UserCheck, ShieldAlert } from 'lucide-react';

const Customers = () => {
  const [searchTerm, SetSearchTerm] = useState("")

  const customers = [
    { id: 1, name: "Rahul Sharma", email: "rahul.sharma@gmail.com", phone: "9876543210", city: "Delhi", orders: 5, totalSpent: 12500, status: "Active", joinedAt: "2025-12-10" },
    { id: 2, name: "Priya Verma", email: "priya.verma@gmail.com", phone: "9123456780", city: "Noida", orders: 2, totalSpent: 4200, status: "Inactive", joinedAt: "2026-01-05" },
    { id: 3, name: "Amit Kumar", email: "amit.kumar@gmail.com", phone: "9988776655", city: "Ghaziabad", orders: 8, totalSpent: 18500, status: "Active", joinedAt: "2025-11-22" },
    { id: 4, name: "Sneha Gupta", email: "sneha.gupta@gmail.com", phone: "9090909090", city: "Lucknow", orders: 3, totalSpent: 7600, status: "Active", joinedAt: "2026-02-14" },
    { id: 5, name: "Arjun Singh", email: "arjun.singh@gmail.com", phone: "9012345678", city: "Kanpur", orders: 1, totalSpent: 1500, status: "Blocked", joinedAt: "2026-03-01" },
    { id: 6, name: "Neha Kapoor", email: "neha.kapoor@gmail.com", phone: "9871234560", city: "Gurgaon", orders: 6, totalSpent: 14200, status: "Active", joinedAt: "2025-10-30" }
  ];

  const filteredCustomer = customers.filter((cust) =>
    cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cust.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cust.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      {/* Header & Stats Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Customer Directory</h1>
          <p className="text-sm text-slate-500 mt-1">Manage relationships and track customer lifetime value</p>
        </div>

        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={searchTerm}
            onChange={(e) => SetSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 w-80 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Contact Details</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">Orders</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Spent</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {filteredCustomer.length > 0 ? (
              filteredCustomer.map((elem) => (
                <tr key={elem.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs border border-blue-100">
                        {elem.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{elem.name}</div>
                        <div className="text-[11px] text-slate-400">ID: #CUST-00{elem.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Mail size={12} className="text-slate-400" /> {elem.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Phone size={12} className="text-slate-400" /> {elem.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <MapPin size={14} className="text-slate-400" /> {elem.city}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                      {elem.orders}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-slate-900">₹{elem.totalSpent.toLocaleString()}</div>
                    <div className="text-[10px] text-emerald-600 font-medium">LTV: High</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border flex items-center gap-1.5 w-fit ${
                      elem.status === "Active" ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                      elem.status === "Inactive" ? "bg-slate-50 text-slate-500 border-slate-200" :
                      "bg-rose-50 text-rose-700 border-rose-100"
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${
                         elem.status === "Active" ? "bg-emerald-500" :
                         elem.status === "Inactive" ? "bg-slate-400" : "bg-rose-500"
                      }`} />
                      {elem.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-20 text-center">
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                        <UserX size={24} />
                      </div>
                      <p className="text-slate-900 font-bold">No customers found</p>
                      <p className="text-slate-500 text-sm">We couldn't find any user matching your search criteria.</p>
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

export default Customers