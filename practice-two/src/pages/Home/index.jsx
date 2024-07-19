import { useState, useEffect } from 'react';

import SideBar from '../../layouts/SideBar';
import Banner from '../../components/Banner';
import Bar from '../../components/Bar';
import ProductList from '../../components/ProductList';

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

  const { products } = useFetchProduct(getProducts);

  const data = [
    { name: OPTIONS.NAME, value: 'name' },
    { name: OPTIONS.PRICE, value: 'price' }
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Show loading icon
        const { data: settingsData, success: settingsSuccess } =
          await getSettingData();

        if (settingsSuccess) {
          setSettings(settingsData);
        }
      } catch (error) {
        // error
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="d-flex wrapper-content">
      <SideBar settings={settings} />
      <main>
        <Banner />
        <Bar data={data} />
        <ProductList products={products.products} />
      </main>
    </div>
  );
};

export default Home;
