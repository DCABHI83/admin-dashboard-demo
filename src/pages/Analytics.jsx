import React from 'react'
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  Calendar,
  Download
} from 'lucide-react'
import LineChart from '../components/LineChart';
import DoughnutChart from '../components/DoghnutChart';
import BarChart from '../components/BarChart';


const Analytics = () => {
  const stats = [
    { label: "Total Revenue", value: "₹1,24,500", change: "+12.5%", positive: true, icon: <TrendingUp size={20} /> },
    { label: "Active Users", value: "1,240", change: "+5.2%", positive: true, icon: <Users size={20} /> },
    { label: "Total Orders", value: "482", change: "-2.1%", positive: false, icon: <ShoppingBag size={20} /> },
    { label: "Conversion Rate", value: "3.24%", change: "+1.1%", positive: true, icon: <Activity size={20} /> },
  ];

  return (
    <div className="space-y-6">
      {/* Header & Global Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Analytics Overview</h1>
          <p className="text-sm text-slate-500 mt-1">Real-time performance metrics and sales distribution</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-100 transition-all">
            <Calendar size={18} className="text-slate-400" />
            Last 30 Days
          </button>
          <button className="flex items-center justify-center p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Primary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-slate-50 text-indigo-600 rounded-xl border border-slate-100">
                {stat.icon}
              </div>
              <div className={`flex items-center gap-0.5 text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                stat.positive 
                  ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                  : "bg-rose-50 text-rose-600 border-rose-100"
              }`}>
                {stat.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {stat.change}
              </div>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue Trend - Large (2/3 width) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Revenue Growth</h2>
              <p className="text-xs text-slate-500 mt-1">Monthly income trajectory</p>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <LineChart />
          </div>
        </div>

        {/* Sales Distribution - Small (1/3 width) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="mb-8">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Market Share</h2>
            <p className="text-xs text-slate-500 mt-1">Sales by category (%)</p>
          </div>
          <div className="h-[350px] w-full">
            <DoughnutChart />
          </div>
        </div>

        {/* Category Sales - Small (1/3 width) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="mb-8">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Top Categories</h2>
            <p className="text-xs text-slate-500 mt-1">Unit volume comparison</p>
          </div>
          <div className="h-[350px] w-full">
            <BarChart />
          </div>
        </div>

        {/* Performance Summary / Extra Space - (2/3 width) */}
        <div className="lg:col-span-2 bg-indigo-900 p-8 rounded-2xl border border-indigo-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-white text-xl font-bold">Insights Summary</h2>
            <p className="text-indigo-200 text-sm mt-2 max-w-md">
              Your revenue has increased by 12.5% compared to last month. The "Electronics" category remains your top performer contributing to 45% of total sales.
            </p>
            <button className="mt-6 px-5 py-2 bg-white text-indigo-900 text-xs font-bold rounded-lg hover:bg-indigo-50 transition-colors">
              View Detailed Report
            </button>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <TrendingUp size={160} className="text-white" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Analytics