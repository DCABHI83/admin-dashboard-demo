import React, { useState } from "react";
import { Search, Plus, Package, MoreVertical, AlertCircle } from "lucide-react";
import Popup from "../components/Popup";
import ChatBot from "react-chatbotify"

const Products = () => {
  const [searchTerm, SetSearchTerm] = useState("");
  const [showPopUp, setShowPopup] = useState(false);

  // Expanded dataset for a "real-world" feel
  const products = [
    { id: 1, name: "Wireless Mouse", category: "Electronics", stock: 120, price: 799, status: "Active" },
    { id: 2, name: "Gaming Keyboard", category: "Electronics", stock: 60, price: 2499, status: "Active" },
    { id: 3, name: "Running Shoes", category: "Footwear", stock: 35, price: 3299, status: "Active" },
    { id: 4, name: "Bluetooth Speaker", category: "Electronics", stock: 12, price: 1599, status: "Active" },
    { id: 5, name: "Denim Jacket", category: "Clothing", stock: 40, price: 1899, status: "Inactive" },
    { id: 6, name: "Smart Watch", category: "Electronics", stock: 25, price: 4999, status: "Active" },
    { id: 7, name: "USB-C Hub", category: "Electronics", stock: 85, price: 1299, status: "Active" },
    { id: 8, name: "Leather Wallet", category: "Accessories", stock: 0, price: 999, status: "Inactive" },
  ];

  const filteredArray = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Absolute Popup Overlay */}
      {showPopUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <Popup setShowPopup={setShowPopup} />
        </div>
      )}

      {/* Header & Actions Card */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Product Inventory</h2>
          <p className="text-sm text-slate-500 mt-1">Manage stock levels, pricing, and visibility</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search by name or category..."
              value={searchTerm}
              onChange={(e) => SetSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 w-64 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white transition-all"
            />
          </div>
          
          <button 
            onClick={() => setShowPopup(true)} 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-900/20 active:scale-95 transition-all"
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Product Info</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Stock Status</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Price</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {filteredArray.length > 0 ? (
              filteredArray.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                        <Package size={20} />
                      </div>
                      <span className="font-semibold text-slate-800 text-sm">{product.name}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md uppercase tracking-tight">
                      {product.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between w-32">
                        <span className={`text-[11px] font-bold ${product.stock < 20 ? 'text-rose-600' : 'text-slate-600'}`}>
                          {product.stock} units
                        </span>
                        {product.stock < 20 && <AlertCircle size={12} className="text-rose-500" />}
                      </div>
                      <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${product.stock < 20 ? 'bg-rose-500' : 'bg-blue-500'}`} 
                          style={{ width: `${Math.min((product.stock / 150) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-bold text-slate-900">₹{product.price.toLocaleString()}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${
                        product.status === "Active"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : "bg-slate-50 text-slate-500 border-slate-200"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-20 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
                      <Search size={32} />
                    </div>
                    <h3 className="text-slate-900 font-bold">No products found</h3>
                    <p className="text-slate-500 text-sm mt-1">Try adjusting your search terms or filters.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    <ChatBot/>
    </div>
  );
};

export default Products;