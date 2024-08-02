import { useState, useEffect } from 'react';

import SideBar from '../../layouts/SideBar';
import Banner from './components/Banner';
import Bar from '../../components/Bar';
import ProductList from '../../components/ProductList';
import ReviewDialog from '../../components/ReviewDialog';
import Toast from '../../components/Toast';

import { OPTIONS } from '../../constants/label';

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

const Home = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [settings, setSettings] = useState({
    types: [],
    colors: [],
    maxPrice: 0
  });

  const [selectedType, setSelectedType] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(990);
  const [selectedColor, setSelectedColor] = useState(null);
  const debouncedChangeInputRange = useDebouncedValue(selectedPrice, 500);
  const [isOpenReviewDialog, setOpenReviewDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const { showToast, alert } = useToast();

  const sortData = [OPTIONS.NAME, OPTIONS.PRICE];

  const handleSelectType = selectedType => {
    setSelectedType(selectedType);
  };

  const handleChangePrice = e => {
    setSelectedPrice(Number(e.target.value));
  };

  const handleChangeColor = e => {
    setSelectedColor(e.target.value);
  };

  const handleCloseReviewDialog = () => {
    setOpenReviewDialog(false);
  };

  const handleOpenReviewDialog = id => {
    setSelectedProduct(id);
    setOpenReviewDialog(true);
  };

  // call api get products
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

  // call api get settings
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
      userName: users[getRandomInt(users.length)],
      productId: selectedProduct
    });

    if (reviewError) {
      showToast(MESSAGE.MESSAGE_FAILED, 'danger');
      return;
    }

    showToast(MESSAGE.MESSAGE_SUCCESS, 'success');
    setOpenReviewDialog(false);

    // call api fetch product by id
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

  useEffect(() => {
    handlePopulateProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType, debouncedChangeInputRange, selectedColor]);

  useEffect(() => {
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
        <ProductList
          products={products}
          onOpen={handleOpenReviewDialog}
        />
        {/* <Pagination
          count={count}
          currentPage={currentPage}
          onClick={handlePageClick}
        /> */}
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
    </div>
  );
};

export default Home;
