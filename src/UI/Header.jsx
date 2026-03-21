import React from 'react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 flex items-center justify-between">
      
      {/* Left: Current Page Label (Matches your Analytics/App structure) */}
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight">Overview</h2>
        <span className="hidden md:inline-block px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded border border-blue-100">
          Live Data
        </span>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        
        {/* Modern Compact Search Bar */}
        <div className="hidden lg:flex items-center bg-gray-50 border border-gray-200 pl-3 pr-2 py-1.5 rounded-lg group focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:border-blue-500/50 focus-within:bg-white transition-all">
          <svg className="w-4 h-4 text-gray-400 group-focus-within:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search dashboard..." 
            className="bg-transparent border-none focus:ring-0 text-xs w-48 outline-none ml-2 text-gray-700"
          />
          <div className="flex items-center gap-1 bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[10px] font-bold text-gray-400 shadow-sm">
            <span>⌘</span><span>K</span>
          </div>
        </div>

        {/* Notifications Button */}
        <button className="relative p-2 text-gray-400 hover:text-slate-900 hover:bg-gray-50 rounded-full transition-all active:scale-90">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
        </button>

        {/* User Profile Info */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-100 cursor-pointer group">
          <div className="hidden md:block text-right">
            <p className="text-[12px] font-bold text-slate-900 leading-none">Deepak Kishore</p>
            <p className="text-[10px] text-gray-400 font-medium mt-1 uppercase tracking-tighter">Admin Account</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-slate-200 border-2 border-transparent group-hover:border-blue-500 transition-all">
            DK
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar