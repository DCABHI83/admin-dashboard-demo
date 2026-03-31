import React, { useState } from "react";

const Category = () => {
  const [searchTerm, SetSearchTerm] = useState("");

  const categories = [
    {
      id: 1,
      name: "Electronics",
      slug: "electronics",
      productCount: 25,
      status: "Active",
      createdAt: "2025-12-01",
    },
    {
      id: 2,
      name: "Footwear",
      slug: "footwear",
      productCount: 12,
      status: "Active",
      createdAt: "2026-01-10",
    },
    {
      id: 3,
      name: "Clothing",
      slug: "clothing",
      productCount: 18,
      status: "Active",
      createdAt: "2025-11-20",
    },
    {
      id: 4,
      name: "Accessories",
      slug: "accessories",
      productCount: 9,
      status: "Inactive",
      createdAt: "2026-02-05",
    },
    {
      id: 5,
      name: "Home Appliances",
      slug: "home-appliances",
      productCount: 7,
      status: "Active",
      createdAt: "2026-03-01",
    },
  ];
  const filteredCategory = categories.filter((categories)=>
  categories.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
  categories.status.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <>
      <div>
        <div className="flex gap-40 mt-5">
          <h1 className="text-white">Categories</h1>
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
            <tr className="text-white">
              <th className="p-8">id</th>
              <th className="p-8">name</th>
              <th className="p-8">productCount</th>
              <th className="p-8">status</th>
            </tr>
          </thead>
        </table>

        <tbody>
          {filteredCategory.length > 0 ? 
          filteredCategory.map((elem) => {
            return (
              <tr key={elem.id} className="text-white">
                <td className="p-8">{elem.id}</td>
                <td className="p-8">{elem.name}</td>
                <td className="p-8">{elem.productCount}</td>
                <td className="p-8">{elem.status}</td>
              </tr>
            );
          }) :
        <div className="text-white text-center">
          <h1>Category not available</h1>
        </div>
        }
        </tbody>
      </div>
    </>
  );
};

export default Category;
