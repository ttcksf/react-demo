import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const productList = [
    {
      title: 'HTML,CSS',
      price: 1000,
    },
    {
      title: 'JavaScript',
      price: 1500,
    },
    {
      title: 'Python',
      price: 2000,
    },
  ];

  return (
    <div>
      <h1>技術書の一覧</h1>
      {productList.map((product, index) => (
        <ProductCard title={product.title} price={product.price} key={index} />
      ))}
    </div>
  );
};

export default Products;
