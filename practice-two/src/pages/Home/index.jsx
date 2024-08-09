import { useState, useEffect, useRef } from 'react';

import SideBar from './components/SideBar';
import Banner from './components/Banner';
import Bar from './components/Bar';
import ProductList from '../../components/ProductList';
import ReviewDialog from '../../components/ReviewDialog';
import Toast from '../../components/Toast';
import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';

import './index.css';

import {
  getProducts,
  getProductById,
  getProductSettings
} from '../../services/product-service';
import { createReviews } from '../../services/review-service';

import { getRandomInt } from '../../utils/randomUser';

import { users } from '../../mocks/users';

import useDebouncedValue from '../../hooks/useDebouncedValue';

import useToast from '../../hooks/useToast';

import { MESSAGE } from '../../constants/message';

import { VARIABLES } from '../../constants/variable';
import { sortData } from '../../constants/label';

const Home = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [settings, setSettings] = useState({
    types: [],
    colors: [],
    maxPrice: 0
  });
  const [message, setMessage] = useState('');
  const [selectedType, setSelectedType] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(
    VARIABLES.DEFAULT_VALUE_PRICE
  );
  const [selectedColor, setSelectedColor] = useState(null);
  const debouncedChangeInputRange = useDebouncedValue(
    selectedPrice,
    VARIABLES.TIME_OUT
  );
  const [isOpenReviewDialog, setOpenReviewDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const { showToast, alert } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const mounted = useRef(false);

  const handleSelectType = selectedType => {
    setCurrentPage(1);
    setSelectedType(selectedType);
  };

  const handleChangePrice = e => {
    setCurrentPage(1);
    setSelectedPrice(Number(e.target.value));
  };

  const handleChangeColor = e => {
    setCurrentPage(1);
    setSelectedColor(e.target.value);
  };

  const handleCloseReviewDialog = () => {
    setOpenReviewDialog(false);
  };

  const handleOpenReviewDialog = id => {
    setSelectedProduct(id);
    setOpenReviewDialog(true);
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleTotalPage = count => {
    const result = Math.ceil(count / VARIABLES.PAGE_SIZE);
    setTotalPage(result);
  };

  const handlePopulateProducts = async () => {
    const { data, error } = await getProducts({
      selectedType,
      selectedPrice: debouncedChangeInputRange,
      selectedColor,
      selectedPageNumber: currentPage
    });

    console.log('data', data);

    if (!error) {
      if (!data.products) {
        setCount(data.count);
        setProducts(data.products);
        setMessage(MESSAGE.MESSAGE_NOT_FIND_PRODUCT);
        handleTotalPage(data.count);
      }
      setCount(data.count);
      setProducts(data.products);
      handleTotalPage(data.count);
      setMessage('');
    }
  };

  const handlePopulateSettings = async () => {
    const { data, error } = await getProductSettings();
    if (!error) {
      setSettings(data);
    }
  };

  const handleSubmitReview = async ({ rating, comment }) => {
    const { error: reviewError } = await createReviews({
      rating,
      comment,
      userId: users[getRandomInt(users.length)],
      productId: selectedProduct
    });

    if (reviewError) {
      showToast(MESSAGE.MESSAGE_FAILED, 'danger');
      return;
    }

    showToast(MESSAGE.MESSAGE_SUCCESS, 'success');
    setOpenReviewDialog(false);

    const { data: product, error: productErr } = await getProductById(
      selectedProduct
    );

    if (!productErr) {
      const updatedProducts = products.map(item =>
        item.id === selectedProduct ? product : item
      );
      setProducts(updatedProducts);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([handlePopulateSettings(), handlePopulateProducts]);
    setLoading(false);
  };

  useEffect(() => {
    if (!mounted.current) {
      // componentDidMount logic
      // const fetchData = async () => {
      //   setLoading(true);
      //   await Promise.all([handlePopulateSettings(), handlePopulateProducts]);
      //   setLoading(false);
      // };
      fetchData();
      mounted.current = true;
    } else {
      // componentDidUpdate logic
      handlePopulateProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType, debouncedChangeInputRange, selectedColor, currentPage]);

  return (
    <div className="d-flex wrapper-content">
      {loading ? (
        <Loading />
      ) : (
        <>
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

            <ProductList
              products={products}
              onOpen={handleOpenReviewDialog}
              message={message}
            />
            <Pagination
              range={totalPage}
              value={currentPage}
              onChange={handlePageChange}
            />
            <ReviewDialog
              open={isOpenReviewDialog}
              onClose={handleCloseReviewDialog}
              onSubmit={handleSubmitReview}
            />
            {alert.show && (
              <Toast
                type={alert.type}
                msg={alert.msg}
              />
            )}
          </main>
        </>
      )}
    </div>
  );
};

export default Home;
