import React from 'react'
import {
  Chart as ChartJs,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'

// Registering necessary components for a professional look
ChartJs.register([
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
])

const revenueData = [
  { "month": "Jan", "revenue": 18500 },
  { "month": "Feb", "revenue": 22000 },
  { "month": "Mar", "revenue": 21000 },
  { "month": "Apr", "revenue": 28000 },
  { "month": "May", "revenue": 34000 },
  { "month": "Jun", "revenue": 32000 },
  { "month": "Jul", "revenue": 45000 }
]

const LineChart = () => {
  const data = {
    labels: revenueData.map((d) => d.month),
    datasets: [{
      label: 'Monthly Revenue',
      data: revenueData.map((d) => d.revenue),
      fill: true,
      // Professional Indigo palette
      borderColor: '#4f46e5', 
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(79, 70, 229, 0.1)');
        gradient.addColorStop(1, 'rgba(79, 70, 229, 0)');
        return gradient;
      },
      tension: 0.4, // Smooth curves
      pointRadius: 4,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#4f46e5',
      pointBorderWidth: 2,
      pointHoverRadius: 6,
      borderWidth: 3,
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Cleaner UI, we can use custom legends in Analytics.jsx
      },
      tooltip: {
        backgroundColor: '#1e293b',
        padding: 12,
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 },
        cornerRadius: 8,
        displayColors: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: '#f1f5f9', // Soft slate grid lines
        },
        ticks: {
          color: '#94a3b8',
          font: { size: 11, weight: '500' },
          callback: (value) => '₹' + value.toLocaleString()
        }
      },
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
        ticks: {
          color: '#94a3b8',
          font: { size: 11, weight: '500' }
        }
      }
    }
  }

  return (
    <div className="w-full h-full min-h-[350px]">
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart