import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X, Mic, Heart, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { state } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Free delivery on orders above $50</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>📞 1-800-FRESH-MART</span>
            <span>🕐 24/7 Service</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-2 rounded-lg">
                <span className="text-xl font-bold">🛒</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">FreshMart</h1>
                <p className="text-xs text-gray-500">Fresh & Fast Delivery</p>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for vegetables, fruits, dairy..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-20 py-3 border-2 border-gray-200 rounded-full focus:border-emerald-500 focus:outline-none"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
                  <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-full">
                    <Mic className="w-4 h-4" />
                  </button>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/wishlist" className="flex flex-col items-center text-gray-600 hover:text-emerald-600 transition-colors">
                <Heart className="w-6 h-6" />
                <span className="text-xs mt-1">Wishlist</span>
              </Link>
              
              <Link to="/cart" className="relative flex flex-col items-center text-gray-600 hover:text-emerald-600 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                <span className="text-xs mt-1">Cart</span>
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Link>

              {isAuthenticated ? (
                <Link to="/account" className="flex flex-col items-center text-gray-600 hover:text-emerald-600 transition-colors">
                  <User className="w-6 h-6" />
                  <span className="text-xs mt-1">{user?.name}</span>
                </Link>
              ) : (
                <Link to="/login" className="flex flex-col items-center text-gray-600 hover:text-emerald-600 transition-colors">
                  <User className="w-6 h-6" />
                  <span className="text-xs mt-1">Login</span>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <Link to="/" className="block py-2 text-gray-800 hover:text-emerald-600">Home</Link>
              <Link to="/shop" className="block py-2 text-gray-800 hover:text-emerald-600">Shop</Link>
              <Link to="/categories" className="block py-2 text-gray-800 hover:text-emerald-600">Categories</Link>
              <Link to="/offers" className="block py-2 text-gray-800 hover:text-emerald-600">Offers</Link>
              <Link to="/cart" className="block py-2 text-gray-800 hover:text-emerald-600">
                Cart ({state.itemCount})
              </Link>
              {isAuthenticated ? (
                <Link to="/account" className="block py-2 text-gray-800 hover:text-emerald-600">
                  My Account
                </Link>
              ) : (
                <Link to="/login" className="block py-2 text-gray-800 hover:text-emerald-600">
                  Login / Signup
                </Link>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;