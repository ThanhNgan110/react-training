import { useState, useEffect } from 'react';

const useFetchProduct = (getProducts, id) => {
  const [products, setProducts] = useState({
    products: [],
    count: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const { success, data } = await getProducts(id ? id : '');
        if (!success) {
          setError('Failed to fetch product');
        }
        setProducts(data);
      } catch (error) {
        setError('An error occurred while fetching the product');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [getProducts, id]);

  return { products, loading, error };
};

export default useFetchProduct;
