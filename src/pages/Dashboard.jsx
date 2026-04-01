import React, { useState } from 'react'
import { 
  Package, 
  Users, 
  ShoppingCart, 
  LayoutGrid, 
  TicketPercent, 
  BarChart3, 
  Menu, 
  X,
  ChevronRight
} from "lucide-react";

import Products from './Products'
import Customers from './Customers';
import Orders from './Orders';
import Category from './Category';
import Coupons from './Coupons';
import Analytics from './Analytics';

const Dashboard = () => {
  const [active, setActive] = useState("products")
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    { id: "products", label: "Products", icon: <Package size={20} />, component: <Products /> },
    { id: "customer", label: "Customers", icon: <Users size={20} />, component: <Customers /> },
    { id: "orders", label: "Orders", icon: <ShoppingCart size={20} />, component: <Orders /> },
    { id: "category", label: "Category", icon: <LayoutGrid size={20} />, component: <Category /> },
    { id: "coupons", label: "Coupons", icon: <TicketPercent size={20} />, component: <Coupons /> },
    { id: "analytics", label: "Analytics", icon: <BarChart3 size={20} />, component: <Analytics /> },
  ];

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <aside 
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-[#0F172A] text-slate-300 flex flex-col transition-all duration-300 ease-in-out border-r border-slate-800`}
      >
        {/* Toggle & Logo Section */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800/50">
          {isOpen && <span className="font-bold tracking-tight text-lg">AdminPro</span>}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-3 py-6 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all group ${
                active === item.id 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                  : "hover:bg-slate-800/50 hover:text-slate-100"
              }`}
            >
              <span className={`${active === item.id ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`}>
                {item.icon}
              </span>
              {isOpen && (
                <div className="flex items-center justify-between w-full">
                  <span>{item.label}</span>
                  {active === item.id && <ChevronRight size={14} className="opacity-50" />}
                </div>
              )}
            </button>
          ))}
        </nav>

        {/* User Info / Footer Placeholder */}
        {isOpen && (
          <div className="p-4 mx-4 mb-6 bg-slate-800/30 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">
                AD
              </div>
              <div>
                <p className="text-xs font-bold text-slate-100">Admin User</p>
                <p className="text-[10px] text-slate-500">System Manager</p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header Bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 shrink-0">
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-widest">
            Management / <span className="text-blue-600">{active}</span>
          </h2>
        </header>

        {/* Dynamic Content Viewport */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto">
             {menuItems.find(item => item.id === active)?.component}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard