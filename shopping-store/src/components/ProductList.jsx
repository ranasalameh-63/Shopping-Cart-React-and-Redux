import { useEffect, useState } from 'react';
import React from "react";
import {useDispatch } from 'react-redux';
import { addToCart } from "../redux/cartSlice";
import axios from 'axios';


// const products =[
//     {id : 1 , name : 'Hoodi' , price : 50},
//     {id : 2 , name : 'Jacket' , price : 70},
//     {id : 3 , name : 'Pants' , price : 100},
//     { id: 4, name: 'T-Shirt', price: 30 },
//     { id: 5, name: 'Sweater', price: 60 },
//     { id: 6, name: 'Shorts', price: 40 },
//     { id: 7, name: 'Sneakers', price: 120 },
//     { id: 8, name: 'Boots', price: 150 },
//     { id: 9, name: 'Jeans', price: 80 },
//     { id: 10, name: 'Cap', price: 20 },
//     { id: 11, name: 'Scarf', price: 25 },
//     { id: 12, name: 'Gloves', price: 35 },
//     { id: 13, name: 'Socks', price: 15 },
//     { id: 14, name: 'Backpack', price: 90 },
//     { id: 15, name: 'Belt', price: 30 },
//     { id: 16, name: 'Watch', price: 200 },
//     { id: 17, name: 'Sunglasses', price: 110 },
//     { id: 18, name: 'Beanie', price: 25 },
//     { id: 19, name: 'Vest', price: 55 },
//     { id: 20, name: 'Tracksuit', price: 130 }
// ];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
}


    useEffect(() => {
      axios.get('https://6784ca971ec630ca33a5a9a4.mockapi.io/products')
        .then(response => {
          console.log("Data from API:", response.data); 
          setProducts(response.data);
        })
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    const productList = ({ addToCart }) => {
      return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      );
    };
    

export default ProductList;


