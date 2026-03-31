import React, { useState } from 'react'
import Category from './Category';

const Orders = () => {
  const [searchTerm,SetSearchTerm] = useState("")

  const orders = [
  {
    id: "ORD001",
    customerName: "Rahul Sharma",
    items: [
      { name: "Wireless Mouse", qty: 2, price: 799 },
      { name: "Gaming Keyboard", qty: 1, price: 2499 }
    ],
    totalAmount: 4097,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    orderStatus: "Delivered",
    createdAt: "2026-03-15"
  },
  {
    id: "ORD002",
    customerName: "Priya Verma",
    items: [
      { name: "Running Shoes", qty: 1, price: 3299 }
    ],
    totalAmount: 3299,
    paymentMethod: "COD",
    paymentStatus: "Pending",
    orderStatus: "Processing",
    createdAt: "2026-03-16"
  },
  {
    id: "ORD003",
    customerName: "Amit Kumar",
    items: [
      { name: "Smart Watch", qty: 1, price: 4999 },
      { name: "Bluetooth Speaker", qty: 1, price: 1599 }
    ],
    totalAmount: 6598,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    orderStatus: "Shipped",
    createdAt: "2026-03-14"
  },
  {
    id: "ORD004",
    customerName: "Sneha Gupta",
    items: [
      { name: "Denim Jacket", qty: 1, price: 1899 }
    ],
    totalAmount: 1899,
    paymentMethod: "UPI",
    paymentStatus: "Failed",
    orderStatus: "Cancelled",
    createdAt: "2026-03-13"
  },
  {
    id: "ORD005",
    customerName: "Neha Kapoor",
    items: [
      { name: "Wireless Mouse", qty: 1, price: 799 },
      { name: "Smart Watch", qty: 1, price: 4999 }
    ],
    totalAmount: 5798,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    orderStatus: "Delivered",
    createdAt: "2026-03-12"
  }
];

const filteredCategory = orders.filter((orders)=>
orders.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || orders.orderStatus.toLowerCase().includes(searchTerm.toLowerCase())
)


  return (
    <>
    <div>
     <div className='flex justify-between items-center mt-5 p-4'>
       <h1 className='text-white'>Orders</h1>
           <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e)=>SetSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-64 outline-none focus:ring-2 focus:ring-blue-400 text-white"
        />
     </div>
      <table>
        <thead>
       <tr className='text-white'>
        <th className='p-4'>id</th>
        <th className='p-4'>customer name</th>
        <th className='p-4'>items</th>
        <th className='p-4'>totalAmount</th>
        <th className='p-4'>paymentMethod</th>
        <th className='p-4'>PaymentStatus</th>
        <th className='p-4'>orderStatus</th>
       
       </tr>
        </thead>

        <tbody>
          {
            filteredCategory.length > 0 ? 
            filteredCategory.map((elem)=>{
              return(
                <tr key={elem.id} className='text-white'>
                  <td className='p-3'>{elem.id}</td>
                  <td className='p-3'>{elem.customerName}</td>
                  <td className='p-3'>{elem.items.map((elem,index)=>{
                    return (
                      <tr key={index}>
                        <td>{elem.name}</td>
                       
                      </tr>
                    )
                  })}</td>

                  <td className='p-3'>
                    {elem.orderStatus}
                  </td>
                  <td className='p-3'>
                    {elem.paymentMethod}
                  </td>
                  <td className='p-3'>
                    {elem.paymentStatus}
                  </td>
                  <td>{elem.orderStatus}</td>

                </tr>
              )
            }) : 
            <div className='text-white text-center'>
              <h1>No orders Available by that name</h1>
            </div>
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Orders