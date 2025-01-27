# Tech Store - Next.js E-Commerce Application 🛒💻

Welcome to the **Tech Store**! This is an e-commerce application built with **Next.js** where users can explore various electronic products, add them to the shopping cart, and proceed to checkout. It provides a simple user interface to showcase products, add items to the cart, and complete orders. 

## 🎯 Features
```
- **Product Catalog**: Display a wide range of electronic products like headphones 🎧, smartphones 📱, laptops 💻, etc.
- **Add to Cart**: Users can add products to the cart 🛍️.
- **Checkout**: Users can review their cart and place an order 📝.
- **State Management**: Cart items are stored in a context using React's Context API 🔄.
```
## ⚙️ Tech Stack
```
- **Frontend**: Next.js (React Framework) ⚛️
- **State Management**: React Context API 🔄
- **Styling**: CSS-in-JS (Inline styles for simplicity) 🎨
- **Routing**: Next.js Dynamic Routing 🔗
- **E-commerce Features**: Add to cart, view cart, checkout 🛒
```
## 🛠️ Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/techstore.git
   cd techstore
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Visit the app in your browser:

   ```
   http://localhost:3000
   ```

## 🗂️ Project Structure

```
/pages
  /blogpost
    [slug]            - Dynamic blog post pages (if applicable)
    /contact/page.js  - Checkout page 🛒
    /about/page.js    - Products and their description 🛍️
  page.js             - Home page 🏠
  layout.js           - Product listing page 🛍️
  checkout/page.js    - Products that are added to cart and checkout 🧾

/context
  CartContext.js      - Contains the context to manage the cart state 🔄

/public
  /images             - Static images for products (e.g., product images 📸)

/components
   /Navbar.js          - Navigation bar with links 🌐
   /Footer.js          - Footer with company information 📍
```

## 📱 Product Gallery
Explore the most amazing gadgets, from **headphones** 🎧 to **smartphones** 📱 and **laptops** 💻! Click on a product image to view its detailed description 📝.

- **Headphones** 🎧
- **Smartphone** 📱
- **Laptop** 💻
- **Smartwatch** ⌚
- **Bluetooth Speaker** 🔊
- **Tablet** 📱
- **Wireless Mouse** 🖱️
- **4K Monitor** 🖥️
- **Smart Home Camera** 📷
- **Gaming Console** 🎮

## 🚀 Usage

1. **Home Page 🏠**

   The home page shows a welcome message and an "Explore" button. Clicking the "Explore" button will navigate to the "About" page, where users can view available products.

2. **About Page 🛍️**

   The "About" page displays a grid of electronic products. Each product is displayed with its image, name, price, and an "Add to Cart" button. Clicking on any product image will redirect to the product's detail page 📄.

3. **Checkout Page 🛒**

   In the checkout page, users can review their cart items. If the cart is empty, users will be prompted to add products to the cart. After placing an order, the cart will be cleared 🧾.

4. **Cart Context 🔄**

   This application uses React's Context API to manage the cart state. The `CartContext.js` file is responsible for providing cart data to the components and functions for adding/removing items from the cart.

---
## 🖥️Output
```
[https://vercel.com/jasmitha-ks-projects/tech-store](https://tech-store-cyan.vercel.app/)
```
## 🎉 Enjoy building and exploring the Tech Store! 🚀

