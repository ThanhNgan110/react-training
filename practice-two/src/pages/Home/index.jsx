// Import react
import { useState, useEffect } from 'react';

// Import components
import SideBar from '../../layouts/SideBar';
import Banner from '../../components/Banner';
import Bar from '../../components/Bar';
import ProductList from '../../components/ProductList';

// Import constants
import { OPTIONS } from '../../constants/label';

// Import css
import './index.css';

// Import api
import { getSettingData } from '../../services/filter-service';
import { getProducts } from '../../services/product-service';

const Home = () => {
  const [settings, setSettings] = useState({
    types: [],
    colors: [],
    maxPrice: 0
  });

  const [products, setProducts] = useState([]);

  const data = [
    { name: OPTIONS.NAME, value: 'name' },
    { name: OPTIONS.PRICE, value: 'price' }
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Show loading icon

        const { data: settingsData, error: settingsError } =
          await getSettingData();
        const { data: productsData, error: productsError } =
          await getProducts();

        if (settingsError || productsError) {
          throw new Error(settingsError || productsError);
        }
        setSettings(settingsData);
        setProducts(productsData.products);
      } catch (error) {
        // error
      } finally {
        // Hide loading icon
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
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default Home;
