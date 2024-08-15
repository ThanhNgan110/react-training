// Components
import { ProductCard, Text } from '../../../../components';

// Css
import './index.css';

const ProductList = ({ products, message, onSubmit }) => {
  return (
    <div className="product-list">
      {message ? (
        <Text as="p">{message}</Text>
      ) : (
        products.map(item => (
          <ProductCard
            key={item.id}
            product={item}
            onSubmit={onSubmit}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
