import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Truck, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { featuredProducts, bestSellers, categories } from '../data/products';

const HomePage: React.FC = () => {
  const brands = [
    { name: 'Fresh Farm', logo: '🌱' },
    { name: 'Dairy Fresh', logo: '🥛' },
    { name: 'Green Valley', logo: '🌿' },
    { name: 'Pure Harvest', logo: '🌾' },
    { name: 'Citrus Fresh', logo: '🍊' },
    { name: 'EcoClean', logo: '♻️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Fresh Groceries
                <span className="block text-yellow-300">Up to 50% Off!</span>
              </h1>
              <p className="text-xl mb-8 text-emerald-100">
                Premium quality fruits, vegetables, and everyday essentials delivered fresh to your doorstep in under 2 hours.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/shop"
                  className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/offers"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-flex items-center justify-center"
                >
                  View Offers
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg"
                alt="Boy carrying fresh vegetables"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-emerald-50 rounded-xl">
              <div className="bg-emerald-600 text-white p-3 rounded-full">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Express Delivery</h3>
                <p className="text-gray-600">Free delivery on orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-blue-50 rounded-xl">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Secure Payment</h3>
                <p className="text-gray-600">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-orange-50 rounded-xl">
              <div className="bg-orange-600 text-white p-3 rounded-full">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                <p className="text-gray-600">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find everything you need in our organized sections</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
              <p className="text-xl text-gray-600">Hand-picked favorites from our collection</p>
            </div>
            <Link
              to="/shop"
              className="hidden md:flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              View All
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Best Sellers</h2>
              <p className="text-xl text-gray-600">Most loved products by our customers</p>
            </div>
            <Link
              to="/shop"
              className="hidden md:flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              View All
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Brand */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Shop by Brand</h2>
            <p className="text-xl text-gray-600">Trusted brands you love</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-3">{brand.logo}</div>
                <h3 className="font-semibold text-gray-800">{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Fresh with Our Newsletter</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Get weekly deals, recipe ideas, and fresh product updates delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-l-full rounded-r-full sm:rounded-r-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-l-full rounded-r-full sm:rounded-l-none font-semibold hover:bg-gray-100 transition-colors mt-4 sm:mt-0">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-emerald-200 mt-4">
            No spam, unsubscribe at any time
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;