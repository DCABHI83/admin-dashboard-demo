import React, { useState } from 'react'
import { AiFillProduct } from "react-icons/ai";
import { AiOutlineCustomerService } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { RiCoupon2Fill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

const Sidenav = () => {

  const [active, setActive] = useState("products")
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="text-white">

      <div
        className="text-2xl p-3 cursor-pointer"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <HiMenu />
      </div>

      {isOpen && (
        <div className="h-screen  flex flex-col gap-4 p-3">

          <div
            onClick={() => setActive("products")}
            className={`cursor-pointer p-2 rounded flex gap-2 items-center ${active === "products" ? "bg-[#006CFE] font-medium" : ""}`}
          >
            <AiFillProduct />
            <h3>Products</h3>
          </div>

          <div
            onClick={() => setActive("customer")}
            className={`cursor-pointer p-2 rounded flex gap-2 items-center ${active === "customer" ? "bg-[#006CFE] font-medium" : ""}`}
          >
            <AiOutlineCustomerService />
            <h3>Customer</h3>
          </div>

          <div
            onClick={() => setActive("orders")}
            className={`cursor-pointer p-2 rounded flex gap-2 items-center ${active === "orders" ? "bg-[#006CFE] font-medium" : ""}`}
          >
            <CiShoppingCart />
            <h3>Orders</h3>
          </div>

          <div
            onClick={() => setActive("category")}
            className={`cursor-pointer p-2 rounded flex gap-2 items-center ${active === "category" ? "bg-[#006CFE] font-medium" : ""}`}
          >
            <BiCategory />
            <h3>Category</h3>
          </div>

          <div
            onClick={() => setActive("coupons")}
            className={`cursor-pointer p-2 rounded flex gap-2 items-center ${active === "coupons" ? "bg-[#006CFE] font-medium" : ""}`}
          >
            <RiCoupon2Fill />
            <h3>Coupons</h3>
          </div>

        </div>
      )}
    </div>
  )
}

export default Sidenav