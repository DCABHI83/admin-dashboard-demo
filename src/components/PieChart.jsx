import React from 'react'
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJs.register([
  ArcElement,
  Tooltip,
  Legend
])

const productRevenue = [
  { "name": "Laptops", "value": 55000 },
  { "name": "Phones", "value": 25000 },
  { "name": "Tablets", "value": 18000 },
  { "name": "Monitors", "value": 12000 },
  { "name": "Accessories", "value": 5300 }
]

const PieChart = () => {
  const data = {
    labels: productRevenue.map((item) => item.name),
    datasets: [{
      data: productRevenue.map((item) => item.value),
      backgroundColor: [
        '#4f46e5', // Indigo 600
        '#6366f1', // Indigo 500
        '#818cf8', // Indigo 400
        '#a5b4fc', // Indigo 300
        '#cbd5e1'  // Slate 300
      ],
      hoverBackgroundColor: [
        '#4338ca',
        '#4f46e5',
        '#6366f1',
        '#818cf8',
        '#94a3b8'
      ],
      borderWidth: 2,
      borderColor: '#ffffff',
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 11,
            weight: '600',
            family: "'Inter', sans-serif"
          },
          color: '#64748b'
        }
      },
      tooltip: {
        backgroundColor: '#1e293b',
        padding: 12,
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 },
        cornerRadius: 8,
        displayColors: true,
        boxPadding: 6,
        callbacks: {
          label: (context) => {
            const value = context.raw;
            return ` ₹${value.toLocaleString()}`;
          }
        }
      }
    }
  }

  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-2">
      <Pie data={data} options={options} />
    </div>
  )
}

export default PieChart