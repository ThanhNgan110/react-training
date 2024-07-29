import { useState, useEffect } from 'react';

import SideBar from '../../layouts/SideBar';
import Banner from './components/Banner';
import Bar from '../../components/Bar';
import ProductList from '../../components/ProductList';
// import Pagination from '../../components/Pagination';

import { OPTIONS } from '../../constants/label';

import './index.css';

import {
  getProducts,
  getProductSettings,
  filterProductByTradeMark
} from '../../services/product-service';

const Home = () => {
  const sortData = [
    { name: OPTIONS.NAME, value: 'name' },
    { name: OPTIONS.PRICE, value: 'price' }
  ];

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [settings, setSettings] = useState({
    types: [],
    colors: [],
    maxPrice: 0
  });

  const [price, setPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = pageCurrent => {
    setCurrentPage(pageCurrent);
  };

  const handleFilterCategory = async category => {
    const { data, error } = await filterProductByTradeMark(category);
    if (!error) {
      setProducts(data.products);
      setCount(data.count);
    }
  };

  const handleChangePrice = e => {
    setPrice(Number(e.target.value));
  };

  useEffect(() => {
    const handlePopulateProducts = async () => {
      const { data, error } = await getProducts();
      if (!error) {
        setCount(data.count);
        setProducts(data.products);
      }
    };

    const handlePopulateSettings = async () => {
      const { data, error } = await getProductSettings();
      if (!error) {
        setSettings(data);
      }
    };

    handlePopulateSettings();
    handlePopulateProducts();
  }, []); // Only run once when the component mounts

  return (
    <div className="d-flex wrapper-content">
      <SideBar
        settings={settings}
        onClick={handleFilterCategory}
        onChange={handleChangePrice}
        price={price}
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
