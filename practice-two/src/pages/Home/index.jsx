import { useState, useEffect, useRef } from 'react';

// Components
import { SideBar, Banner, Bar, ProductList } from './components';
import { Toast, Pagination, Loading } from '../../components';

// Css
import './index.css';

// Services
import {
  getProducts,
  getProductById,
  getProductSettings
} from '../../services/product-service';
import { createReviews } from '../../services/review-service';

// Hooks
import useDebouncedValue from '../../hooks/useDebouncedValue';
import useToast from '../../hooks/useToast';

// Constants
import { MESSAGE } from '../../constants/message';
import { VARIABLES } from '../../constants/variable';
import { SORT_DATA } from '../../constants';

// Util
import { getRandomInt } from '../../utils/common';

// Mock
import { users } from '../../mocks/users';

const Home = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [settings, setSettings] = useState({
    types: [],
    colors: [],
    maxPrice: 0,
    banner: {}
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
  const { showToast, alert } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      // componentDidMount logic
      fetchData();
      mounted.current = true;
    } else {
      // componentDidUpdate logic
      handlePopulateProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType, debouncedChangeInputRange, selectedColor, currentPage]);

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

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleTotalPage = count => {
    const result = Math.ceil(count / VARIABLES.PAGE_SIZE);
    setTotalPage(result);
  };

  const handleSubmitReview = async ({ productId, rating, comment }) => {
    setLoading(true);
    const { error: reviewError } = await createReviews({
      rating,
      comment,
      userId: users[getRandomInt(users.length)],
      productId: productId
    });

    if (reviewError) {
      showToast(MESSAGE.MESSAGE_FAILED, 'danger');
      return;
    }
    showToast(MESSAGE.MESSAGE_SUCCESS, 'success');

    const { data: product, error: productErr } = await getProductById(
      productId
    );

    if (!productErr) {
      const updatedProducts = products.map(item =>
        item.id === productId ? product : item
      );
      setProducts(updatedProducts);
    }

    setLoading(false);
  };

  const handlePopulateSettings = settingsData => {
    const { data, error } = settingsData;
    if (error) return error;
    setSettings(data);
  };

  const handlePopulateProducts = async () => {
    const { data, error } = await getProducts({
      selectedType,
      selectedPrice: debouncedChangeInputRange,
      selectedColor,
      selectedPageNumber: currentPage
    });

    if (error) return error;
    if (data.products.length === 0) {
      setProducts(data.products);
      setCount(data.count);
      setMessage(MESSAGE.MESSAGE_NOT_FIND_PRODUCT);
      return;
    }
    setCount(data.count);
    setProducts(data.products);
    setMessage('');
    handleTotalPage(data.count);
  };

  const setDataProduct = productData => {
    const { data, error } = productData;
    if (error) return error;
    setCount(data.count);
    setProducts(data.products);
    setMessage('');
    handleTotalPage(data.count);
  };

  // call api products and settings
  const fetchData = async () => {
    setLoading(true);
    const [settingsData, productsData] = await Promise.all([
      getProductSettings(),
      getProducts({
        selectedType,
        selectedPrice: debouncedChangeInputRange,
        selectedColor,
        selectedPageNumber: currentPage
      })
    ]);
    handlePopulateSettings(settingsData);
    setDataProduct(productsData);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

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
        <Banner data={settings.banner} />
        <Bar
          data={SORT_DATA}
          count={count}
        />

        <ProductList
          products={products}
          onSubmit={handleSubmitReview}
          message={message}
        />
        <Pagination
          range={totalPage}
          value={currentPage}
          onChange={handlePageChange}
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
