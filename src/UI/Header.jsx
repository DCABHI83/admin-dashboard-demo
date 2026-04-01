import React from 'react';
import { HiOutlineSearch, HiOutlineBell, HiOutlineChevronDown } from 'react-icons/hi';
import { IoSearchOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full h-16 bg-white/90 backdrop-blur-md border-b border-slate-200/60 px-8 flex items-center justify-between">
      
      {/* Left: Dynamic Page Breadcrumb/Label */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold text-slate-900 tracking-tight leading-none">Dashboard</h2>
          <span className="text-[11px] text-slate-500 font-medium mt-1">Overview & Analytics</span>
        </div>
        <span className="hidden md:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase rounded-md border border-emerald-100/50">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-none"></span>
          Live System
        </span>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        
        {/* Professional Search Input */}
        <div className="hidden lg:flex items-center bg-slate-100/80 border border-slate-200/50 pl-3.5 pr-2 py-2 rounded-xl group focus-within:ring-4 focus-within:ring-indigo-500/10 focus-within:border-indigo-500/40 focus-within:bg-white transition-all">
          <IoSearchOutline className="text-slate-400 text-lg group-focus-within:text-indigo-600" />
          <input 
            type="text" 
            placeholder="Search resources, users..." 
            className="bg-transparent border-none focus:ring-0 text-[13px] w-56 outline-none ml-2.5 text-slate-700 placeholder:text-slate-400 font-medium"
          />
          <div className="flex items-center gap-1 bg-white border border-slate-200 px-1.5 py-1 rounded-md text-[10px] font-bold text-slate-400 shadow-sm ml-2">
            <span>⌘</span><span>K</span>
          </div>
        </div>

        {/* Utility Buttons */}
        <div className="flex items-center gap-2">
          <button className="relative p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-all border border-transparent hover:border-indigo-100">
            <HiOutlineBell className="text-xl" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white"></span>
          </button>
        </div>

        {/* Enhanced User Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200 cursor-pointer group">
          <div className="hidden md:block text-right">
            <p className="text-[13px] font-bold text-slate-900 leading-none">Deepak Kishore</p>
            <p className="text-[10px] text-slate-500 font-semibold mt-1.5 uppercase tracking-wider">System Admin</p>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-slate-200 border border-slate-700 group-hover:shadow-indigo-100 transition-all">
              DK
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-lg border border-slate-200 text-slate-400 text-[10px] group-hover:text-indigo-600">
              <HiOutlineChevronDown />
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;