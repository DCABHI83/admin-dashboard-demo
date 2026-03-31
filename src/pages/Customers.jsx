import React, { useState } from 'react'

const Customers = () => {
const [searchTerm,SetSearchTerm] = useState("")
 
  const customers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    phone: "9876543210",
    city: "Delhi",
    orders: 5,
    totalSpent: 12500,
    status: "Active",
    joinedAt: "2025-12-10"
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@gmail.com",
    phone: "9123456780",
    city: "Noida",
    orders: 2,
    totalSpent: 4200,
    status: "Inactive",
    joinedAt: "2026-01-05"
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit.kumar@gmail.com",
    phone: "9988776655",
    city: "Ghaziabad",
    orders: 8,
    totalSpent: 18500,
    status: "Active",
    joinedAt: "2025-11-22"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha.gupta@gmail.com",
    phone: "9090909090",
    city: "Lucknow",
    orders: 3,
    totalSpent: 7600,
    status: "Active",
    joinedAt: "2026-02-14"
  },
  {
    id: 5,
    name: "Arjun Singh",
    email: "arjun.singh@gmail.com",
    phone: "9012345678",
    city: "Kanpur",
    orders: 1,
    totalSpent: 1500,
    status: "Blocked",
    joinedAt: "2026-03-01"
  },
  {
    id: 6,
    name: "Neha Kapoor",
    email: "neha.kapoor@gmail.com",
    phone: "9871234560",
    city: "Gurgaon",
    orders: 6,
    totalSpent: 14200,
    status: "Active",
    joinedAt: "2025-10-30"
  }
];

const filteredCustomer = customers.filter((customers)=>
customers.name.toLowerCase().includes(searchTerm.toLowerCase()) || customers.email.toLowerCase().includes(searchTerm.toLowerCase()) || customers.phone.toLowerCase().includes(searchTerm.toLowerCase())

)
  return (
  <>
  <div className='border '>
<div className='flex justify-between items-center'>
  <h1 className='text-white'>Customer</h1><div>
      <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e)=>SetSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-3 w-64 outline-none focus:ring-2 focus:ring-blue-400 text-white mt-4"
        />
</div>
</div>


<table className='w-full mt-5'>
  <thead className='h-[10vh] border bg-[#F3F4F6] rounded'>
    <tr >
      <th>id</th>
      <th>name</th>
      <th>email</th>
      <th>phone</th>
      <th>city</th>
      <th>orders</th>
      <th>totalspent</th>
      <th>status</th>
    </tr>
  </thead>

  <tbody>
 
      {
        filteredCustomer.length > 0 ? 
        filteredCustomer.map((elem)=>{
          return (
            <tr key={elem.id} className='text-white  '>
              <td className='p-3'>{elem.id}</td>
              <td className='p-3'>{elem.name}</td>
              <td  className='p-3'>{elem.email}</td>
              <td  className='p-3'>{elem.phone}</td>
              <td  className='p-3'>{elem.city}</td>
              <td  className='p-3'>{elem.orders}</td>
              <td  className='p-3'>{elem.totalSpent}</td>
              <td  className={`${elem.status === "Active" ? 'bg-green' : 'bg-red'}`}>{elem.status}</td>
            </tr>
          )
        }) : 
        <div className='text-white text-center '>
          <h1>User data not available</h1>
        </div>
      }
 
  </tbody>
</table>
  </div>
  
  </>
  )
}

export default Customers