import React from 'react'
import {Chart as ChartJs,ArcElement,Tooltip,Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
ChartJs.register([
   ArcElement,
   Tooltip,
   Legend
])
const prices = [
  { "id": 1, "name": "Laptop", "price": 55000 },
  { "id": 2, "name": "Phone", "price": 25000 },
  { "id": 3, "name": "Headphones", "price": 3000 },
  { "id": 4, "name": "Keyboard", "price": 1500 },
  { "id": 5, "name": "Mouse", "price": 800 },
  { "id": 6, "name": "Monitor", "price": 12000 },
  { "id": 7, "name": "Tablet", "price": 18000 },
  { "id": 8, "name": "Smartwatch", "price": 7000 }
]

const DoughnutChart = () => {
    var data = {
         labels: prices.map((labels)=>labels.name),
      datasets: [{
        // label: '# of Votes',
        data: prices.map((obj)=>obj.price),
        backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
      }]
    }
    var options = {
        maintainAspectRatio : true,
        scales:{
            y:{
                beginAtZero:true
            }
        },
        legend:{
            labels:{
                fontSize:26
            }
        }
    }
  return (
<Doughnut height={500} data={data} options={options}/>
  )
}

export default DoughnutChart