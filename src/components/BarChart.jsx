import React from 'react'
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJs.register([
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
])

const salesData = [
  { "name": "Electronics", "sales": 850 },
  { "name": "Footwear", "sales": 620 },
  { "name": "Clothing", "sales": 950 },
  { "name": "Accessories", "sales": 480 },
  { "name": "Home", "sales": 380 },
  { "name": "Beauty", "sales": 290 }
]

const BarChart = () => {
  const data = {
    labels: salesData.map((d) => d.name),
    datasets: [{
      label: 'Units Sold',
      data: salesData.map((d) => d.sales),
      backgroundColor: '#6366f1', // Indigo 500
      hoverBackgroundColor: '#4f46e5', // Indigo 600
      borderRadius: 8, // Rounded bars for a modern look
      borderSkipped: false,
      barThickness: 32,
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Keep it clean
      },
      tooltip: {
        backgroundColor: '#1e293b',
        padding: 12,
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 },
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: (context) => ` ${context.raw} Units`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: '#f1f5f9',
        },
        ticks: {
          color: '#94a3b8',
          font: { size: 11, weight: '500' },
          stepSize: 200
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#475569',
          font: { size: 11, weight: '600' }
        }
      }
    }
  }

  return (
    <div className="w-full h-full min-h-[350px]">
      <Bar data={data} options={options} />
    </div>
  )
}

export default BarChart