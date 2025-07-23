import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-2 rounded-lg">
                <span className="text-xl font-bold">🛒</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">FreshMart</h3>
                <p className="text-sm text-gray-400">Fresh & Fast Delivery</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted online supermarket delivering fresh groceries to your doorstep. 
              Quality products, competitive prices, and exceptional service since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-emerald-400 transition-colors">Shop All</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-emerald-400 transition-colors">Categories</Link></li>
              <li><Link to="/offers" className="text-gray-400 hover:text-emerald-400 transition-colors">Special Offers</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-emerald-400 transition-colors">Delivery Info</Link></li>
              <li><Link to="/bulk-orders" className="text-gray-400 hover:text-emerald-400 transition-colors">Bulk Orders</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-emerald-400 transition-colors">Help Center</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-emerald-400 transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-emerald-400 transition-colors">Shipping Info</Link></li>
              <li><Link to="/track-order" className="text-gray-400 hover:text-emerald-400 transition-colors">Track Your Order</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">1-800-FRESH-MART</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">support@freshmart.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <span className="text-gray-400">
                  123 Fresh Street<br />
                  Grocery District<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-3">Get weekly deals and fresh updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-emerald-500 text-white"
                />
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 FreshMart. All rights reserved. | 
              <Link to="/privacy" className="hover:text-emerald-400 transition-colors ml-1">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-emerald-400 transition-colors ml-1">Terms of Service</Link>
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">We Accept:</span>
              <div className="flex space-x-2">
                <div className="bg-white text-gray-800 px-2 py-1 rounded text-xs font-semibold">VISA</div>
                <div className="bg-white text-gray-800 px-2 py-1 rounded text-xs font-semibold">MASTER</div>
                <div className="bg-white text-gray-800 px-2 py-1 rounded text-xs font-semibold">PAYPAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;