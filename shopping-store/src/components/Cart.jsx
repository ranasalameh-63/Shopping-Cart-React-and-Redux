import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        cartItems.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
            />
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
