export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  nutrition?: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  images: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
  orders: Order[];
  wallet: number;
  subscription?: Subscription;
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  street: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  date: string;
  deliverySlot: string;
  address: Address;
}

export interface Subscription {
  id: string;
  type: 'weekly-fruits' | 'monthly-essentials';
  price: number;
  nextDelivery: string;
  active: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}