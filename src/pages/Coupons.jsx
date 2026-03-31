import React, { useState } from 'react'

const Coupons = () => {

    const [searchTerm,SetSearchTerm] = useState("")
  
  const coupons = [
  {
    id: "CPN10",
    code: "SAVE10",
    discountType: "percentage", // or "flat"
    discountValue: 10,
    minOrderAmount: 500,
    maxDiscount: 200,
    usageLimit: 100,
    usedCount: 45,
    status: "Active",
    expiryDate: "2026-04-01"
  },
  {
    id: "CPN20",
    code: "FLAT200",
    discountType: "flat",
    discountValue: 200,
    minOrderAmount: 1000,
    maxDiscount: null,
    usageLimit: 50,
    usedCount: 20,
    status: "Active",
    expiryDate: "2026-03-30"
  },
  {
    id: "CPN30",
    code: "WELCOME15",
    discountType: "percentage",
    discountValue: 15,
    minOrderAmount: 300,
    maxDiscount: 150,
    usageLimit: 200,
    usedCount: 180,
    status: "Inactive",
    expiryDate: "2026-03-10"
  },
  {
    id: "CPN40",
    code: "FESTIVE50",
    discountType: "flat",
    discountValue: 50,
    minOrderAmount: 200,
    maxDiscount: null,
    usageLimit: 500,
    usedCount: 120,
    status: "Active",
    expiryDate: "2026-05-01"
  }
];

const fileteredCoupons = coupons.filter((coupons)=>
coupons.status.toLowerCase().includes(searchTerm.toLowerCase()) || 
coupons.discountType.toLowerCase().includes(searchTerm.toLowerCase()) ||
coupons.code.toLowerCase().includes(searchTerm.toLowerCase())
)
  return (
   <>
   <div className='flex justify-between items-center mt-5'>

    <h1>Coupons</h1>
   <div>
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e)=>SetSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-64 outline-none focus:ring-2 focus:ring-blue-400 text-white"
        />
   </div>

   </div>

   <table>
    <thead>
      <tr className='text-white'>
        <th className='p-3'>id</th>
        <th className='p-3'>code</th>
        <th className='p-3'>discountType</th>
        <th className='p-3'>discountValue</th>
        <th className='p-3'> minOrderAmount</th>
        <th className='p-3'> maxDiscount</th>
        <th className='p-3'> usageLimit</th>
        <th className='p-3'> usedCount</th>
        <th className='p-3'> status</th>
      </tr>
    </thead>

   <tbody>
    {
      fileteredCoupons.length > 0 ? 
      fileteredCoupons.map((elem)=>{
        return(
          <tr key={elem.id} className='text-white' >
  <td className='p-4'>{elem.id}</td>
  <td className='p-4'>{elem.code}</td>
  <td className='p-4'>{elem.discountType}</td>
  <td className='p-4'>{elem.discountValue}</td>
  <td className='p-4'>{elem.minOrderAmount}</td>
  <td className='p-4'>{elem.maxDiscount ? elem.maxDiscount : 'N/A'}</td>
  <td className='p-4'>{elem.usageLimit}</td>
  <td className='p-4'>{elem.usedCount}</td>
  <td className='p-4'>
    <span>{elem.status}</span>
  </td>
</tr>
        )
      }) : 
      <div className='flex justify-center items-center text-white'>
        <h1>Coupons Not Availble</h1>
      </div>
    }
   </tbody>
  </table>
   
   </>
  )
}

export default Coupons