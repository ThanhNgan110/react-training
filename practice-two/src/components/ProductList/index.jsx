import ProductCard from '../ProductCard';

import './index.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(item => (
        <ProductCard
          key={item.id}
          product={item}
        />
      ))}
    </div>
  );
};

export default ProductList;
