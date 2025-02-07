import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://67a657a7510789ef0dfb26ef.mockapi.io/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="p-4 mt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-95 object-cover hover:opacity-90 transition-opacity"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-pink-800">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.description}</p>
              <p className="text-lg font-bold text-pink-600">${product.price}</p>
            </div>
            <button
                onClick={() => handleAddToCart(product)}
                className="w-full py-2 bg-gradient-to-r from-pink-500 to-pink-900 text-white font-semibold rounded-md shadow-md hover:from-pink-600 hover:to-pink-700 hover:shadow-lg transition transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to Cart
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;