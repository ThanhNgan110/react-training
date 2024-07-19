import { useEffect, useState } from 'react';

const useFetchProduct = (getProducts, id) => {
  const [products, setProducts] = useState({
    products: [],
    count: 0
  });
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { success, data } = await getProducts(id ? id : '');
        if (success) {
          setProducts(data);
        }
      } catch (error) {
        // error
      }
    };
    fetchProduct();
  }, [getProducts, id]);
  return { products };
};

export default useFetchProduct;
