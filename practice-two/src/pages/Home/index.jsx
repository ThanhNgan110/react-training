// Import react
import { useState, useEffect } from 'react';

//Import component
import SideBar from '../../layouts/SideBar';
import Banner from '../../components/Banner';
import Bar from '../../components/Bar';
import ProductList from '../../components/ProductList';

// Import constant
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
    const fetchProductTypes = async () => {
      // Call loading icon if needed
      const { data, error } = await getSettingData();

      const products = await getProducts();

      if (!error) {
        setSettings(data);
        setProducts(products.data.products);
      }
      // Hide loading icon if needed
    };

    fetchProductTypes();
  }, []);
  return (
    <>
      <div className="d-flex wrapper-content">
        <SideBar settings={settings} />
        <main>
          <Banner />
          <Bar data={data} />
          <ProductList product={products} />
        </main>
      </div>
    </>
  );
};

export default Home;
