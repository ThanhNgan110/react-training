import { useParams } from 'react-router-dom';
import useFetchProduct from '../../hooks/useFetchProduct';
import { getProductById } from '../../services/product-service';
import './index.css';
import ProductImages from '../../components/ProductImages';
import ProductContent from '../../components/ProductContent';

const Product = () => {
  const { id } = useParams();
  const { products, loading, error } = useFetchProduct(getProductById, id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product</div>;
  }

  if (!products) {
    return <div>No product found</div>;
  }

  return (
    <div className="d-flex section-product">
      <ProductImages images={products.image} />
      <ProductContent products={products} />
    </div>
  );
};

export default Product;
