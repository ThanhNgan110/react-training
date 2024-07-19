import { Link } from 'react-router-dom';

import ProductCard from '../ProductCard';

import './index.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(item => (
        <Link
          key={item.id}
          to={`/products/${item.id}`}
        >
          <ProductCard product={item} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
