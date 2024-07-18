import ProductCard from '../ProductCard';

import './index.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <ProductCard product={products} />
    </div>
  );
};

export default ProductList;
