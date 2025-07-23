import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="group block"
    >
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 text-center">
        <div className="text-4xl mb-3">{category.icon}</div>
        <h3 className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
          {category.name}
        </h3>
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${category.color}`}>
          Shop Now
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;