// Import react
import { useState, useEffect } from 'react';

//Import component
import Header from '../../layouts/Header';
import SideBar from '../../layouts/SideBar';

// Import css
import './index.css';

// Import api
import { getProductTypes } from '../../services/Products/filter-service';

const HomePage = () => {
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
    <>
      <Header />
      <main className="wrapper-main">
        <SideBar settings={productData} />
      </main>
    </>
  );
};

export default HomePage;
