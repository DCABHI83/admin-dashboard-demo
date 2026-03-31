import React, { useState } from "react";
import Popup from "../components/Popup";

const Products = () => {
  const [searchTerm,SetSearchTerm] = useState("")
  const [showPopUp,setShowPopup] = useState(false)

  const products = [
    { id: 1, name: "Wireless Mouse", category: "Electronics", stock: 120, price: 799, status: "Active" },
    { id: 2, name: "Gaming Keyboard", category: "Electronics", stock: 60, price: 2499, status: "Active" },
    { id: 3, name: "Running Shoes", category: "Footwear", stock: 35, price: 3299, status: "Active" },
    { id: 4, name: "Bluetooth Speaker", category: "Electronics", stock: 75, price: 1599, status: "Active" },
    { id: 5, name: "Denim Jacket", category: "Clothing", stock: 40, price: 1899, status: "Inactive" },
    { id: 6, name: "Smart Watch", category: "Electronics", stock: 25, price: 4999, status: "Active" },
  ];

const filteredArray = products.filter((products)=>
  products.name.toLowerCase().includes(searchTerm.toLowerCase()) || products.category.toLowerCase().includes(searchTerm.toLowerCase())
) 



  return (
    <div className="p-6 relative">
         <div className="absolute">
          {
            showPopUp && <Popup setShowPopup = {setShowPopup}  />
          }
        </div>
      <div className="flex justify-between items-center mb-4">
       
        <h2 className="text-xl font-semibold text-white">Products</h2>

        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e)=>SetSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-64 outline-none focus:ring-2 focus:ring-blue-400 text-white"
        />
        <button onClick={()=>setShowPopup(prev => !prev)} className="text-white border p-3">
  Add Product
</button>
      </div>

      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        
        <thead className="bg-gray-100">
          <tr className="text-left">
            <th className="p-3">Product</th>
            <th className="p-3">Category</th>
            <th className="p-3">Stock</th>
            <th className="p-3">Price</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredArray.length > 0 ?  
          
          filteredArray?.map((product) => (
            <tr key={product.id} className="border-t  text-white">
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">{product.stock}</td>
              <td className="p-3">${product.price}</td>

              <td className="p-3">
                <span
                  className={`px-2 py-1 text-sm rounded-full ${
                    product.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.status}
                </span>
              </td>
            </tr>
          )):
          <div className="text-white flex justify-center items-center">
            <h1>Product not Available</h1>
          </div>
          
          }
      
        </tbody>

      </table>
    </div>
  );
};

export default Products;