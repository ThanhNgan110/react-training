import { useState, useEffect } from 'react';

import SideBar from '../../layouts/SideBar';
import Banner from './components/Banner';
import Bar from '../../components/Bar';
import ProductList from '../../components/ProductList';

import { OPTIONS } from '../../constants/label';

import './index.css';

import {
  getProducts,
  getProductSettings
} from '../../services/product-service';

import useDebouncedValue from '../../hooks/useDebouncedValue';

const Home = () => {
  const sortData = [
    OPTIONS.NAME,
    OPTIONS.PRICE
    // { name: , value: 'name' },
    // { name:, value: 'price' }
  ];

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [settings, setSettings] = useState({
    types: [],
    colors: [],
    maxPrice: 0
  });

  const [selectedType, setSelectedType] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const debouncedChangeInputRange = useDebouncedValue(selectedPrice, 500);

  const handleSelectType = selectedType => {
    setSelectedType(selectedType);
  };

  const handleChangePrice = e => {
    setSelectedPrice(Number(e.target.value));
  };

  const handleChangeColor = e => {
    setSelectedColor(e.target.value);
  };

  useEffect(() => {
    const handlePopulateProducts = async () => {
      const { data, error } = await getProducts({
        selectedType,
        selectedPrice: debouncedChangeInputRange,
        selectedColor
      });

      if (!error) {
        setCount(data.count);
        setProducts(data.products);
      }
    };
    handlePopulateProducts();
  }, [selectedType, debouncedChangeInputRange, selectedColor]);

  useEffect(() => {
    const handlePopulateSettings = async () => {
      const { data, error } = await getProductSettings();
      if (!error) {
        setSettings(data);
      }
    };
    handlePopulateSettings();
  }, []);

  return (
    <div className="d-flex wrapper-content">
      <SideBar
        settings={settings}
        onClick={handleSelectType}
        activeSelected={selectedType}
        handleChangePrice={handleChangePrice}
        handleChangeColor={handleChangeColor}
        price={selectedPrice}
      />
      <main>
        <Banner />
        <Bar
          data={sortData}
          count={count}
        />
        <ProductList products={products} />
        {/* <Pagination
          count={count}
          currentPage={currentPage}
          onClick={handlePageClick}
        /> */}
      </main>
    </div>
  );
};

export default Home;
