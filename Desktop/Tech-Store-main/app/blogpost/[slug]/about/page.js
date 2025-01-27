'use client';
import React, { useContext } from 'react';
import { useCart } from '@/context/CartContext';  

const AboutPage = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();  // Access cart data and functions
  const electronics = [
    { id: 1, name: "Headphones", price: "$50", imageUrl: "/images/Headphones.jpg", description: "Matlek Wired Gaming Headphones with Mic Surround Sound Deep Bass Works with All Mobile Phones." },
    { id: 2, name: "Smartphone", price: "$299", imageUrl: "/images/smartphone.jpg", description: "Latest model with advanced features, including a powerful camera and fast processor." },
    { id: 3, name: "Laptop", price: "$799", imageUrl: "/images/laptop.jpg", description: "High-performance laptop for work and gaming, equipped with a fast SSD and large screen." },
    { id: 4, name: "Smartwatch", price: "$199", imageUrl: "/images/smartwatch.jpg", description: "Track your fitness and stay connected with this stylish and functional smartwatch." },
    { id: 5, name: "Bluetooth Speaker", price: "$120", imageUrl: "/images/speaker.jpg", description: "Portable wireless speaker with excellent sound quality and long battery life." },
    { id: 6, name: "Tablet", price: "$350", imageUrl: "/images/tablet.jpg", description: "Lightweight tablet perfect for browsing, media, and productivity on the go." },
    { id: 7, name: "Wireless Mouse", price: "$25", imageUrl: "/images/mouse.jpg", description: "Ergonomic wireless mouse with precision tracking and a sleek design(Black)." },
    { id: 8, name: "4K Monitor", price: "$400", imageUrl: "/images/monitoe.jpg", description: "Ultra-clear 4K monitor for a great viewing experience whether for gaming or work." },
    { id: 9, name: "Smart Home Camera", price: "$80", imageUrl: "/images/camera.jpg", description: "Keep an eye on your home with this easy-to-install smart camera." },
    { id: 10, name: "Gaming Console", price: "$499", imageUrl: "/images/console.jpg", description: "Next-gen gaming console with stunning graphics and exclusive game titles." },
  ];
   

  // Handle Add to Cart
  const handleAddToCart = (item) => {
    addToCart(item);
    alert("Item Added to Cart");
  };

  // Handle quantity updates (+ and -)
  const handleUpdateQuantity = (itemId, quantityChange) => {
    if (quantityChange === -1) {
      const item = cart.find(cartItem => cartItem.id === itemId);
      if (item && item.quantity === 1) {
        removeFromCart(itemId); // If quantity reaches 1, remove from cart
      } else {
        updateQuantity(itemId, quantityChange); // Decrease quantity
      }
    } else {
      updateQuantity(itemId, quantityChange); // Increase quantity
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h1>Explore the wide range of electronics with our Tech Store</h1>
      <div style={styles.productGrid}>
        {electronics.map((item) => (
          <div key={item.id} style={styles.productCard}>
            <div style={styles.imageContainer}>
              <img src={item.imageUrl} alt={item.name} style={styles.productImage} />
            </div>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p style={styles.productDescription}>{item.description}</p>
            {/* Add to Cart button or quantity controls */}
            {cart.some(cartItem => cartItem.id === item.id) ? (
              <div style={styles.quantityControls}>
                <button
                  onClick={() => handleUpdateQuantity(item.id, -1)}
                  style={styles.qtyButton}
                >
                  -
                </button>
                <span>{cart.find(cartItem => cartItem.id === item.id)?.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.id, 1)}
                  style={styles.qtyButton}
                >
                  +
                </button>
              </div>
            ) : (
              <button onClick={() => handleAddToCart(item)} style={styles.addToCartButton}>
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    textAlign: 'center',
    padding: '20px',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '20px',
  },
  productCard: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    width: '250px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  productImage: {
    width: '200px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  productDescription: {
    fontSize: '1em',
    color: '#555',
    marginTop: '10px',
    lineHeight: '1.5',
    padding: '0 10px',
  },
  addToCartButton: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  quantityControls: {
    marginTop: '15px',
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    
  },
  qtyButton: {
    marginTop: '5px',
    padding: '5px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    
  },
};

export default AboutPage;
