import React, { useState } from "react";
import { Search, FolderTree, MoreHorizontal, Layers, Plus } from "lucide-react";
import CategoryPopup from "../components/CategoryPopup";

const Category = () => {
  const [searchTerm, SetSearchTerm] = useState("");
  const [showPopUp,setShowPopUp] = useState(false)
  const categories = [
    { id: 1, name: "Electronics", slug: "electronics", productCount: 25, status: "Active", createdAt: "2025-12-01" },
    { id: 2, name: "Footwear", slug: "footwear", productCount: 12, status: "Active", createdAt: "2026-01-10" },
    { id: 3, name: "Clothing", slug: "clothing", productCount: 18, status: "Active", createdAt: "2025-11-20" },
    { id: 4, name: "Accessories", slug: "accessories", productCount: 9, status: "Inactive", createdAt: "2026-02-05" },
    { id: 5, name: "Home Appliances", slug: "home-appliances", productCount: 7, status: "Active", createdAt: "2026-03-01" },
  ];

  const filteredCategory = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cat.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {
        showPopUp && <CategoryPopup setShowPopUp = {setShowPopUp}  />
      }
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Categories</h1>
          <p className="text-sm text-slate-500 mt-1">Organize products into hierarchical groups</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => SetSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 w-64 outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white transition-all"
            />
          </div>
          <button onClick={()=>setShowPopUp(true)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-900/20">
            <Plus size={18} />
            New Category
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="px-8 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">ID</th>
              <th className="px-8 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Category Details</th>
              <th className="px-8 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Products</th>
              <th className="px-8 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-8 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Created</th>
              <th className="px-8 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredCategory.length > 0 ? (
              filteredCategory.map((elem) => (
                <tr key={elem.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5 text-sm font-medium text-slate-400">
                    #CAT-0{elem.id}
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                        <FolderTree size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{elem.name}</div>
                        <div className="text-[10px] text-slate-400 font-medium lowercase tracking-wide">/{elem.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                       <span className="text-sm font-bold text-slate-700">{elem.productCount}</span>
                       <span className="text-[11px] text-slate-400 font-medium">Items</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border flex items-center gap-1.5 w-fit ${
                      elem.status === "Active" 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100" 
                        : "bg-slate-50 text-slate-500 border-slate-200"
                    }`}>
                      <div className={`w-1 h-1 rounded-full ${elem.status === "Active" ? "bg-emerald-500" : "bg-slate-400"}`} />
                      {elem.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-xs text-slate-500 font-medium">
                    {elem.createdAt}
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-8 py-20 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                      <Layers size={24} />
                    </div>
                    <p className="text-slate-900 font-bold">Category not available</p>
                    <p className="text-slate-500 text-sm">We couldn't find any category matching your search.</p>
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

export default Category;