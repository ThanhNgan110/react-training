import ProductCard from '../ProductCard';
import Text from '../Text';

import './index.css';

const ProductList = ({ products, message, onOpen }) => {
  return (
    <div className="product-list">
      {message ? (
        <Text as="p">{message}</Text>
      ) : (
        products.map(item => (
          <ProductCard
            key={item.id}
            product={item}
            onOpen={onOpen}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
