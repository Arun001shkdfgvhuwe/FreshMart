import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Order } from '../types';

interface AdminState {
  isAdminAuthenticated: boolean;
  orders: Order[];
}

interface AdminContextType extends AdminState {
  adminLogin: (username: string, password: string) => boolean;
  adminLogout: () => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [adminState, setAdminState] = useState<AdminState>({
    isAdminAuthenticated: false,
    orders: [
      {
        id: 'ORD-1704123456',
        items: [
          {
            id: '1',
            name: 'Fresh Organic Bananas',
            price: 2.99,
            image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg',
            category: 'Fruits',
            brand: 'Fresh Farm',
            rating: 4.5,
            reviews: 128,
            inStock: true,
            description: 'Sweet and ripe organic bananas',
            images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg'],
            quantity: 2
          }
        ],
        total: 5.98,
        status: 'pending',
        date: '2025-01-02',
        deliverySlot: '9:00 AM - 11:00 AM',
        address: {
          id: '1',
          type: 'home',
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          isDefault: true
        }
      },
      {
        id: 'ORD-1704123457',
        items: [
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
            description: 'Fresh organic baby spinach leaves',
            images: ['https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg'],
            quantity: 1
          }
        ],
        total: 4.99,
        status: 'confirmed',
        date: '2025-01-02',
        deliverySlot: '11:00 AM - 1:00 PM',
        address: {
          id: '2',
          type: 'work',
          street: '456 Business Ave',
          city: 'New York',
          state: 'NY',
          zipCode: '10002',
          isDefault: false
        }
      }
    ]
  });

  const adminLogin = (username: string, password: string): boolean => {
    if (username === 'admin' && password === 'admin') {
      setAdminState(prev => ({ ...prev, isAdminAuthenticated: true }));
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setAdminState(prev => ({ ...prev, isAdminAuthenticated: false }));
  };

  const addOrder = (order: Order) => {
    setAdminState(prev => ({
      ...prev,
      orders: [order, ...prev.orders]
    }));
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setAdminState(prev => ({
      ...prev,
      orders: prev.orders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    }));
  };

  return (
    <AdminContext.Provider value={{
      ...adminState,
      adminLogin,
      adminLogout,
      addOrder,
      updateOrderStatus
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};