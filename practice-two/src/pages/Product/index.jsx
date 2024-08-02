import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './index.css';

import ProductImages from '../../components/ProductImages';
import ProductContent from '../../components/ProductContent';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tabs/Tab';
import TabContent from '../../components/Tabs/TabContent';
import TabBar from '../../components/TabBar';
import Loading from '../../components/Spinner';
import Toast from '../../components/Toast';
import ReviewDialog from '../../components/ReviewDialog';

import { PAGES } from '../../constants/route';

import { TAB } from '../../constants/tab';

import { getProductById } from '../../services/product-service';
import {
  createReviews,
  getReviewsByProductId
} from '../../services/review-service';

import { getRandomInt } from '../../utils/randomUser';

import { users } from '../../mocks/users';

import useToast from '../../hooks/useToast';

import { MESSAGE } from '../../constants/message';

const Product = () => {
  let { id } = useParams();

  const { showToast, alert } = useToast(); // Use the custom hook for toast notifications

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenReviewDialog, setOpenReviewDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [reviews, setReview] = useState([]);

  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [{ title: TAB.PRODUCT_INFO }, { title: TAB.REVIEWS }];

  const items = [
    { title: PAGES.PRODUCT.VALUE, href: PAGES.HOME.PATH },
    { title: product ? product.name : '', href: '', active: true }
  ];

  const handleSetTab = async index => {
    setCurrentTab(index);
  };

  const handleCloseReviewDialog = () => {
    setOpenReviewDialog(false);
  };

  const handleOpenReviewDialog = id => {
    setSelectedProduct(id);
    setOpenReviewDialog(true);
  };

  const fetchProductById = async productId => {
    setIsLoading(true);
    const { data, error } = await getProductById(productId);
    if (!error) {
      setProduct(data);
    }
    setIsLoading(false);
  };

  const handleSubmitReview = async ({ rating, comment }) => {
    const { data, error } = await createReviews({
      rating,
      comment,
      userName: users[getRandomInt(users.length)],
      productId: selectedProduct
    });

    if (error) {
      showToast(MESSAGE.MESSAGE_FAILED, 'danger');
    }

    showToast(MESSAGE.MESSAGE_SUCCESS, 'success');
    // set data reviews
    setReview(prevReviews => {
      return [data, ...prevReviews];
    });
    setOpenReviewDialog(false);
    // call fetch product by id
    const productId = data.productId;
    await fetchProductById(productId);
  };

  useEffect(() => {
    fetchProductById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // call api fetch get reviews
    const fetchGetReviews = async () => {
      const { data } = await getReviewsByProductId(id);
      setReview(data.reviews);
    };
    fetchGetReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <TabBar items={items} />
      <main className="wrapper-product">
        <section className="d-flex gap-40 section-product">
          <ProductImages
            images={product.images}
            name={product.name}
          />
          <ProductContent
            product={product}
            onOpen={handleOpenReviewDialog}
          />
        </section>
        <section className="tab-review">
          <Tabs>
            <div className="d-flex tab-item">
              {tabs.map((item, index) => (
                <Tab
                  key={index}
                  onClick={() => handleSetTab(index)}
                  active={index === currentTab ? 'active' : ''}
                >
                  {item.title}
                </Tab>
              ))}
            </div>
            <TabContent
              currentTab={currentTab}
              reviews={reviews ?? null}
              description={product.description}
            />
          </Tabs>
        </section>
      </main>
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
    </>
  );
};

export default Product;
