// Import react
import { useEffect, useState } from 'react';

// Import components
import Trademarks from './Trademarks';
import Prices from './Prices';
import Colors from './Colors';

// Import css
import './index.css';

// Import api
import { getProductTypes } from '../../services/Products/filterService';

const SideBar = () => {
  const [productData, setProductData] = useState({
    types: [],
    colors: [],
    maxPrice: 0
  });

  useEffect(() => {
    const fetchProductTypes = async () => {
      // Call loading icon if needed
      const { data, isError } = await getProductTypes();
      if (!isError) {
        setProductData(data);
      }
      // Hide loading icon if needed
    };

    fetchProductTypes();
  }, []);

  return (
    <div className="sidebar">
      <Trademarks types={productData.types} />
      <Prices maxPrice={productData.maxPrice} />
      <Colors colors={productData.colors} />
    </div>
  );
};

export default SideBar;
