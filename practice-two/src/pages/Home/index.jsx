import { useState, useEffect } from 'react';

import SideBar from '../../layouts/SideBar';
import Banner from './components/Banner';
import Bar from '../../components/Bar';
import ProductList from '../../components/ProductList';
import Pagination from '../../components/Pagination';
import ModalReview from '../../components/ModalReview';

import { OPTIONS } from '../../constants/label';

import './index.css';

import {
  getProducts,
  getProductSettings
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

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = pageCurrent => {
    setCurrentPage(pageCurrent);
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
  }, []);

  // const handleSubmitReview = () => {
  //   console.log('test');
  // };

  return (
    <div className="d-flex wrapper-content">
      <SideBar settings={settings} />
      <main>
        <Banner />
        <Bar
          data={sortData}
          count={count}
        />
        <ProductList products={products} />
        <Pagination
          count={count}
          currentPage={currentPage}
          onClick={handlePageClick}
        />
        {/* <ModalReview/> */}
      </main>
    </div>
  );
};

export default Home;
