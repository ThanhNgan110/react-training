import { useState, useEffect } from 'react';

import SideBar from '../../layouts/SideBar';
import Banner from '../../components/Banner';
import Bar from '../../components/Bar';
import ProductList from '../../components/ProductList';
import Pagination from '../../components/Pagination';

import { OPTIONS } from '../../constants/label';

import './index.css';

import { getSettingData } from '../../services/filter-service';
import { getProducts } from '../../services/product-service';

import useFetchProduct from '../../hooks/useFetchProduct';

const Home = () => {
  const [settings, setSettings] = useState({
    types: [],
    colors: [],
    maxPrice: 0
  });

  const [currentPage, setCurrentPage] = useState(1);
  const { products, loading, error } = useFetchProduct(
    getProducts,
    currentPage
  );

  const data = [
    { name: OPTIONS.NAME, value: 'name' },
    { name: OPTIONS.PRICE, value: 'price' }
  ];

  const count = 5; // data mock

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        // Show loading icon
        const { data: settingsData, success: settingsSuccess } =
          await getSettingData();

        if (settingsSuccess) {
          setSettings(settingsData);
        }
      } catch (error) {
        // error handling
      }
    };

    fetchSettings();
  }, []);

  const handlePageClick = pageNumber => {
    setCurrentPage(pageNumber);
  };

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
    <div className="d-flex wrapper-content">
      <SideBar settings={settings} />
      <main>
        <Banner />
        <Bar data={data} />
        <ProductList products={products.products} />
        <Pagination
          count={count}
          currentPage={currentPage}
          onClick={handlePageClick}
        />
      </main>
    </div>
  );
};

export default Home;
