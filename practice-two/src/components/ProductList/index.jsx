import ProductCard from '../ProductCard';

import './index.css';

const ProductList = ({ products, onOpen }) => {
  return (
    <div className="product-list">
      {products.map(item => (
        <ProductCard
          key={item.id}
          product={item}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
};

export default ProductList;
