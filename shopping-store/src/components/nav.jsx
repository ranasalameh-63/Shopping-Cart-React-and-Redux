import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCart from "./Cart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Navbar = () => {
  // عدد العناصر في السلة (يمكن ربطها بالحالة الفعلية لاحقًا)
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemCount = cartItems.length; // كمثال، يمكنك استبدالها بحالة فعلية لاحقًا

 
  
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* شعار الموقع */}
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/736x/ee/7b/fb/ee7bfb0552fed066124cf0c57a4cbe8a.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-bold text-pink-900 ml-3">TrendyWear</span>
        </div>

        {/* الروابط */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-pink-900 hover:text-pink-600 font-semibold transition"
          >
            Products
          </Link>
        </div>

        <div className="flex items-center">
          {/* أيقونة السلة */}
          <Link to="/Cart" className="relative cursor-pointer mr-3">
            <FaShoppingCart className="text-pink-900 hover:text-pink-600 text-2xl transition" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;