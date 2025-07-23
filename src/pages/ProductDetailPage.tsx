import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, ArrowLeft, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
          <Link to="/shop" className="text-emerald-600 hover:text-emerald-700">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_ITEM', payload: product });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-emerald-600">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-emerald-600">Shop</Link>
          <span>/</span>
          <Link to={`/category/${product.category}`} className="hover:text-emerald-600">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-800">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link
          to="/shop"
          className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Shop</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-emerald-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <p className="text-emerald-600 font-medium mb-2">{product.brand}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-emerald-600">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="text-green-600 font-medium">✓ In Stock</span>
                ) : (
                  <span className="text-red-600 font-medium">✗ Out of Stock</span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 text-lg">{product.description}</p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 font-medium">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <span className="text-gray-600">
                  Total: <span className="font-semibold text-emerald-600">${(product.price * quantity).toFixed(2)}</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                    product.inStock
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
                
                <button className="py-4 px-6 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </button>
                
                <button className="py-4 px-6 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Truck className="w-5 h-5 text-emerald-600" />
                  <span>Free delivery on orders over $50</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span>100% satisfaction guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-16">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'description'
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('nutrition')}
                className={`py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'nutrition'
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                Nutrition Info
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                Reviews ({product.reviews})
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            )}

            {activeTab === 'nutrition' && product.nutrition && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Nutrition Information</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-emerald-600">{product.nutrition.calories}</div>
                    <div className="text-sm text-gray-600">Calories</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-emerald-600">{product.nutrition.protein}</div>
                    <div className="text-sm text-gray-600">Protein</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-emerald-600">{product.nutrition.carbs}</div>
                    <div className="text-sm text-gray-600">Carbs</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-emerald-600">{product.nutrition.fat}</div>
                    <div className="text-sm text-gray-600">Fat</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-semibold">JD</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">John Doe</h4>
                        <div className="flex items-center space-x-2">
                          {renderStars(5)}
                          <span className="text-sm text-gray-500">2 days ago</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Excellent quality! Fresh and delivered on time. Will definitely order again.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">SA</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Sarah Adams</h4>
                        <div className="flex items-center space-x-2">
                          {renderStars(4)}
                          <span className="text-sm text-gray-500">1 week ago</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Good quality product. Packaging could be better but overall satisfied with the purchase.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;