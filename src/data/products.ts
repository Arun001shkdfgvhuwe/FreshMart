import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Vegetables', icon: '🥕', color: 'bg-green-100 text-green-800' },
  { id: '2', name: 'Fruits', icon: '🍎', color: 'bg-red-100 text-red-800' },
  { id: '3', name: 'Dairy', icon: '🥛', color: 'bg-blue-100 text-blue-800' },
  { id: '4', name: 'Snacks', icon: '🍿', color: 'bg-yellow-100 text-yellow-800' },
  { id: '5', name: 'Beverages', icon: '🧃', color: 'bg-purple-100 text-purple-800' },
  { id: '6', name: 'Household', icon: '🧽', color: 'bg-gray-100 text-gray-800' },
  { id: '7', name: 'Frozen', icon: '❄️', color: 'bg-cyan-100 text-cyan-800' },
  { id: '8', name: 'Organic', icon: '🌱', color: 'bg-emerald-100 text-emerald-800' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Organic Bananas',
    price: 2.99,
    originalPrice: 3.49,
    image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg',
    category: 'Fruits',
    brand: 'Fresh Farm',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    description: 'Sweet and ripe organic bananas perfect for smoothies and snacks.',
    nutrition: { calories: 105, protein: '1.3g', carbs: '27g', fat: '0.4g' },
    images: [
      'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg',
      'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg'
    ]
  },
  {
    id: '2',
    name: 'Organic Baby Spinach',
    price: 4.99,
    image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg',
    category: 'Vegetables',
    brand: 'Green Valley',
    rating: 4.8,
    reviews: 87,
    inStock: true,
    description: 'Fresh organic baby spinach leaves, perfect for salads and cooking.',
    nutrition: { calories: 23, protein: '2.9g', carbs: '3.6g', fat: '0.4g' },
    images: [
      'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg',
      'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg'
    ]
  },
  {
    id: '3',
    name: 'Greek Yogurt Plain',
    price: 5.49,
    image: 'https://images.pexels.com/photos/1342507/pexels-photo-1342507.jpeg',
    category: 'Dairy',
    brand: 'Dairy Fresh',
    rating: 4.6,
    reviews: 203,
    inStock: true,
    description: 'Creamy Greek yogurt packed with probiotics and protein.',
    nutrition: { calories: 100, protein: '17g', carbs: '6g', fat: '0g' },
    images: [
      'https://images.pexels.com/photos/1342507/pexels-photo-1342507.jpeg',
      'https://images.pexels.com/photos/1070874/pexels-photo-1070874.jpeg'
    ]
  },
  {
    id: '4',
    name: 'Premium Mixed Nuts',
    price: 12.99,
    originalPrice: 15.99,
    image: 'https://images.pexels.com/photos/1446318/pexels-photo-1446318.jpeg',
    category: 'Snacks',
    brand: 'Nutty Delight',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    description: 'Premium mix of almonds, cashews, walnuts, and pecans.',
    nutrition: { calories: 170, protein: '6g', carbs: '5g', fat: '15g' },
    images: [
      'https://images.pexels.com/photos/1446318/pexels-photo-1446318.jpeg',
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg'
    ]
  },
  {
    id: '5',
    name: 'Fresh Orange Juice',
    price: 6.99,
    image: 'https://images.pexels.com/photos/1435740/pexels-photo-1435740.jpeg',
    category: 'Beverages',
    brand: 'Citrus Fresh',
    rating: 4.4,
    reviews: 92,
    inStock: true,
    description: 'Freshly squeezed orange juice with no added sugars.',
    nutrition: { calories: 112, protein: '2g', carbs: '26g', fat: '0.5g' },
    images: [
      'https://images.pexels.com/photos/1435740/pexels-photo-1435740.jpeg',
      'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg'
    ]
  },
  {
    id: '6',
    name: 'Eco-Friendly Dish Soap',
    price: 8.99,
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
    category: 'Household',
    brand: 'EcoClean',
    rating: 4.7,
    reviews: 134,
    inStock: true,
    description: 'Plant-based dish soap that cuts grease while being gentle on hands.',
    images: [
      'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
      'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg'
    ]
  },
  {
    id: '7',
    name: 'Frozen Berry Mix',
    price: 7.49,
    image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg',
    category: 'Frozen',
    brand: 'Arctic Harvest',
    rating: 4.5,
    reviews: 78,
    inStock: true,
    description: 'Mixed frozen berries including strawberries, blueberries, and raspberries.',
    nutrition: { calories: 80, protein: '1g', carbs: '20g', fat: '0.5g' },
    images: [
      'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg',
      'https://images.pexels.com/photos/1293006/pexels-photo-1293006.jpeg'
    ]
  },
  {
    id: '8',
    name: 'Organic Quinoa',
    price: 9.99,
    image: 'https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg',
    category: 'Organic',
    brand: 'Pure Harvest',
    rating: 4.8,
    reviews: 167,
    inStock: true,
    description: 'Premium organic quinoa, a complete protein and superfood.',
    nutrition: { calories: 222, protein: '8g', carbs: '39g', fat: '4g' },
    images: [
      'https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg',
      'https://images.pexels.com/photos/1659412/pexels-photo-1659412.jpeg'
    ]
  }
];

export const featuredProducts = products.slice(0, 4);
export const bestSellers = products.slice(2, 6);