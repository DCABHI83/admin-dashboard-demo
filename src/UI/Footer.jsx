import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-white border-t border-gray-100 px-8 py-6 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Branding & Copyright */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-[10px] text-white font-bold">
              3
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-900">3FITECH Admin</span>
          </div>
          <span className="hidden md:block w-[1px] h-4 bg-gray-200"></span>
          <p className="text-xs text-gray-400 font-medium">
            © {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors">Documentation</a>
            <a href="#" className="text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors">Support</a>
            <a href="#" className="text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors">Changelog</a>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">System Operational</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer