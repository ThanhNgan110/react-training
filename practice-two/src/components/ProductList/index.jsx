import ProductCard from '../ProductCard';

import './index.css';

const ProductList = ({ product }) => {
  return (
    <div className="product-list">
      <ProductCard product={product} />
    </div>
  );
};

export default ProductList;
