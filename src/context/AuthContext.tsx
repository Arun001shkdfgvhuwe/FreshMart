import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (name: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false
  });

  const login = async (email: string, password: string) => {
    // Mock login - in real app, this would call an API
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email,
      phone: '+1234567890',
      addresses: [],
      orders: [],
      wallet: 50.00
    };
    
    setAuthState({
      user: mockUser,
      isAuthenticated: true
    });
  };

  const signup = async (name: string, email: string, password: string) => {
    // Mock signup - in real app, this would call an API
    const mockUser: User = {
      id: '1',
      name,
      email,
      phone: '',
      addresses: [],
      orders: [],
      wallet: 0
    };
    
    setAuthState({
      user: mockUser,
      isAuthenticated: true
    });
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};