import React from 'react'
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJs.register([
  ArcElement,
  Tooltip,
  Legend
])

const categorySales = [
  { "name": "Electronics", "value": 45 },
  { "name": "Footwear", "value": 25 },
  { "name": "Clothing", "value": 15 },
  { "name": "Accessories", "value": 10 },
  { "name": "Others", "value": 5 }
]

const DoughnutChart = () => {
  const data = {
    labels: categorySales.map((item) => item.name),
    datasets: [{
      data: categorySales.map((item) => item.value),
      backgroundColor: [
        '#4f46e5', // Indigo 600
        '#6366f1', // Indigo 500
        '#818cf8', // Indigo 400
        '#94a3b8', // Slate 400
        '#cbd5e1'  // Slate 300
      ],
      hoverBackgroundColor: [
        '#4338ca', // Darker Indigo
        '#4f46e5',
        '#6366f1',
        '#64748b',
        '#94a3b8'
      ],
      borderWidth: 2,
      borderColor: '#ffffff',
      hoverOffset: 12
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%', // Makes the doughnut thinner and more modern
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 12,
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
          label: (context) => ` ${context.label}: ${context.raw}%`
        }
      }
    }
  }

  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-4">
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default DoughnutChart