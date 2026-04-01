import React, { useState } from 'react';
import { Search, Package,  Banknote, MoreVertical, AlertCircle, ShoppingBag } from 'lucide-react';

const Orders = () => {
  const [searchTerm, SetSearchTerm] = useState("");

  const orders = [
    { id: "ORD-7721", customerName: "Rahul Sharma", items: [{ name: "Wireless Mouse", qty: 2, price: 799 }, { name: "Gaming Keyboard", qty: 1, price: 2499 }], totalAmount: 4097, paymentMethod: "UPI", paymentStatus: "Paid", orderStatus: "Delivered", createdAt: "2026-03-15" },
    { id: "ORD-8829", customerName: "Priya Verma", items: [{ name: "Running Shoes", qty: 1, price: 3299 }], totalAmount: 3299, paymentMethod: "COD", paymentStatus: "Pending", orderStatus: "Processing", createdAt: "2026-03-16" },
    { id: "ORD-9910", customerName: "Amit Kumar", items: [{ name: "Smart Watch", qty: 1, price: 4999 }, { name: "Bluetooth Speaker", qty: 1, price: 1599 }], totalAmount: 6598, paymentMethod: "Card", paymentStatus: "Paid", orderStatus: "Shipped", createdAt: "2026-03-14" },
    { id: "ORD-4452", customerName: "Sneha Gupta", items: [{ name: "Denim Jacket", qty: 1, price: 1899 }], totalAmount: 1899, paymentMethod: "UPI", paymentStatus: "Failed", orderStatus: "Cancelled", createdAt: "2026-03-13" },
    { id: "ORD-1102", customerName: "Neha Kapoor", items: [{ name: "Wireless Mouse", qty: 1, price: 799 }, { name: "Smart Watch", qty: 1, price: 4999 }], totalAmount: 5798, paymentMethod: "Card", paymentStatus: "Paid", orderStatus: "Delivered", createdAt: "2026-03-12" }
  ];

  const filteredOrders = orders.filter((order) =>
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.orderStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Order Management</h1>
          <p className="text-sm text-slate-500 mt-1">Track and fulfill incoming customer purchases</p>
        </div>

        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
          <input
            type="text"
            placeholder="Search Order ID, Customer..."
            value={searchTerm}
            onChange={(e) => SetSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 w-80 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Purchased Items</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">Status</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Payment</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-md">{order.id}</span>
                    <div className="text-[10px] text-slate-400 mt-1">{order.createdAt}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-slate-900">{order.customerName}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1 max-w-[200px]">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="text-xs text-slate-600 truncate flex items-center gap-1">
                          <Package size={12} className="text-slate-400 shrink-0" />
                          <span className="font-medium text-slate-800">{item.qty}x</span> {item.name}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-slate-900">₹{order.totalAmount.toLocaleString()}</div>
                    <div className="text-[10px] text-slate-400">{order.paymentMethod}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${
                        order.orderStatus === "Delivered" ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                        order.orderStatus === "Cancelled" ? "bg-rose-50 text-rose-700 border-rose-100" :
                        order.orderStatus === "Processing" ? "bg-blue-50 text-blue-700 border-blue-100" :
                        "bg-amber-50 text-amber-700 border-amber-100"
                      }`}>
                        {order.orderStatus}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[11px] font-semibold flex items-center gap-1.5 ${
                      order.paymentStatus === "Paid" ? "text-emerald-600" :
                      order.paymentStatus === "Failed" ? "text-rose-600" : "text-amber-600"
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        order.paymentStatus === "Paid" ? "bg-emerald-500" :
                        order.paymentStatus === "Failed" ? "bg-rose-500" : "bg-amber-500"
                      }`} />
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                      <ShoppingBag size={24} />
                    </div>
                    <p className="text-slate-900 font-bold">No orders found</p>
                    <p className="text-slate-500 text-sm">We couldn't find any orders matching your criteria.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;