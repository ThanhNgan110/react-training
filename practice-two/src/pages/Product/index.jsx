import { useParams } from 'react-router-dom';

import useFetchProduct from '../../hooks/useFetchProduct';

import { getProductById } from '../../services/product-service';

import './index.css';

import ProductImages from '../../components/ProductImages';

const Product = () => {
  const { id } = useParams();
  const { products } = useFetchProduct(getProductById, id);

  return (
    <div>
      <ProductImages images={products.image} />
    </div>
  );
};

export default Product;
