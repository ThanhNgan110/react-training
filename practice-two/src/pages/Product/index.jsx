import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Css
import './index.css';

// Components
import ProductContent from '../../components/ProductContent';
import Tab from '../../components/Tabs/Tab';
import TabContent from '../../components/Tabs/TabContent';
import TabBar from '../../components/TabBar';
import { ProductImages, Loading, Toast } from '../../components';

// Constant
import { PAGES } from '../../constants/route';
import { MESSAGE } from '../../constants/message';
import { TABS } from '../../constants';

// Service
import { getProductById } from '../../services/product-service';
import {
  createReviews,
  getReviewsByProductId
} from '../../services/review-service';

// Common
import { getRandomInt } from '../../utils/common';

// Mock
import { users } from '../../mocks/users';

// Hook
import useToast from '../../hooks/useToast';

const Product = () => {
  let { id } = useParams();
  const { showToast, alert } = useToast();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReview] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const items = [
    { title: PAGES.PRODUCT.VALUE, href: PAGES.HOME.PATH },
    { title: product ? product.name : '', href: '', active: true }
  ];

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

  const handleSetTab = async index => {
    setCurrentTab(index);
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
      userId: users[getRandomInt(users.length)],
      productId: id
    });

    if (error) {
      showToast(MESSAGE.MESSAGE_FAILED, 'danger');
    }

    showToast(MESSAGE.MESSAGE_SUCCESS, 'success');
    // set data reviews
    setReview(prevReviews => {
      return [data, ...prevReviews];
    });

    // call fetch product by id
    const productId = data.productId;
    await fetchProductById(productId);
  };

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
            onSubmit={handleSubmitReview}
          />
        </section>
        <section className="tab-review">
          <>
            <div className="d-flex tab-item">
              {TABS.map((item, index) => (
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
          </>
        </section>
      </main>
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
