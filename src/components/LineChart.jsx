import React from 'react'
import {Chart as ChartJs,LineElement,PointElement} from 'chart.js'
import {Line} from 'react-chartjs-2'
ChartJs.register([
  LineElement,
  PointElement
])
const prices = [
  { "year": 2018, "price": 12000 },
  { "year": 2019, "price": 15000 },
  { "year": 2020, "price": 14000 },
  { "year": 2021, "price": 18000 },
  { "year": 2022, "price": 22000 },
  { "year": 2023, "price": 26000 },
  { "year": 2024, "price": 30000 }
]

const LineChart = () => {
    var data = {
         labels: prices.map((labels)=>labels.year),
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
<Line height={500} data={data} options={options}/>
  )
}

export default LineChart