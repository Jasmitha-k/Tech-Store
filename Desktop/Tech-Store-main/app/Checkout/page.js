'use client';
import React from 'react';
import { useCart } from '@/context/CartContext'; 

const CheckoutPage = () => {
  const { cart, removeFromCart, updateQuantity,clearCart } = useCart(); 

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
  };
  const handleOrderPlacement = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items to your cart before placing an order.');
    } else {
      alert('Order placed successfully!');
      clearCart(); // Clear the cart after order placement
    }
  };

  // Handle quantity updates (+ and -)
  const handleUpdateQuantity = (itemId, quantityChange) => {
    updateQuantity(itemId, quantityChange);
  };

  // Handle item removal from cart
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div style={styles.pageContainer}>
      <h1>Your Cart</h1>
      <div style={styles.cartItemsContainer}>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <div style={styles.cartItemDetails}>
                <img src={item.imageUrl} alt={item.name} style={styles.cartItemImage} />
                <div style={styles.cartItemInfo}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
              </div>
              <div style={styles.quantityControls}>
                <button
                  onClick={() => handleUpdateQuantity(item.id, -1)}
                  style={styles.qtyButton}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.id, 1)}
                  style={styles.qtyButton}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                style={styles.removeButton}
              >
                Remove from Cart
              </button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div style={styles.checkoutSummary}>
          <h2>Total: ${calculateTotal().toFixed(2)}</h2>
          <button onClick={handleOrderPlacement} style={styles.checkoutButton}>
          Checkout
        </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  pageContainer: {
    textAlign: 'center',
    padding: '20px',
  },
  cartItemsContainer: {
    marginTop: '20px',
    paddingBottom: '20px',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    borderBottom: '1px solid #ddd',
    marginBottom: '10px',
  },
  cartItemDetails: {
    display: 'flex',
  },
  cartItemImage: {
    width: '100px',
    height: 'auto',
    objectFit: 'cover',
    marginRight: '15px',
  },
  cartItemInfo: {
    textAlign: 'left',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  qtyButton: {
    padding: '5px 10px', // Adjusted for smaller size
    fontSize: '14px', // Smaller font size
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 5px',
    transition: 'background-color 0.3s',
  },
  removeButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    fontSize: '18px', // Smaller font size
    width: '200px', // Width auto to fit text
    height:'30px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop:'30px',
    transition: 'background-color 0.3s',
  },
  checkoutSummary: {
    marginTop: '20px',
    paddingTop: '10px',
    borderTop: '1px solid #ddd',
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
export default CheckoutPage;