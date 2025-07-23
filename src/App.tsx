import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="pb-16 md:pb-0">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/category/:categoryId" element={<ShopPage />} />
                <Route path="/account" element={<div className="min-h-screen flex items-center justify-center"><p>Account page coming soon!</p></div>} />
                <Route path="/orders" element={<div className="min-h-screen flex items-center justify-center"><p>Orders page coming soon!</p></div>} />
                <Route path="/wishlist" element={<div className="min-h-screen flex items-center justify-center"><p>Wishlist page coming soon!</p></div>} />
                <Route path="/order-confirmation/:orderId" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h2 className="text-3xl font-bold text-green-600 mb-4">Order Confirmed! 🎉</h2><p className="text-gray-600">Thank you for your order. You will receive a confirmation email shortly.</p></div></div>} />
              </Routes>
            </main>
            <MobileNavigation />
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;