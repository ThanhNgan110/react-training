import { useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import { getProductById } from '../../services/product-service';
import { getReviews } from '../../services/review-service';

import './index.css';

import ProductImages from '../../components/ProductImages';
import ProductContent from '../../components/ProductContent';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tabs/Tab';
import TabContent from '../../components/Tabs/TabContent';

import { PAGES } from '../../constants/route';

import { TAB } from '../../constants/tab';

const Product = () => {
  // const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    const handleProductDetail = async () => {
      const { data, error } = await getProductById();
      if (!error) {
        setProduct(data);
      }
    };

    const handleGetReviews = async () => {
      const { data, error } = await getReviews();
      if (!error) {
        setReview(data);
      }
    };
    handleProductDetail();
    handleGetReviews();
  }, []);

  // const { products, loading, error } = useFetchProduct(getProductById, id);

  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [{ title: TAB.PRODUCT_INFO }, { title: TAB.REVIEWS }];

  // const items = [
  //   { title: PAGES.PRODUCT.VALUE, href: PAGES.HOME.PATH },
  //   { title: product ? product.name : '', href: '', active: true }
  // ];

  const handleSetTab = index => {
    setCurrentTab(index);
  };

  return (
    <main className="wrapper-product">
      <section className="d-flex gap-40 section-product">
        <Suspense fallback={<p>Loading...</p>}>
          <ProductImages images={product.image} />
        </Suspense>
        {/* <Suspense fallback={<p>Loading....</p>}>
          <ProductContent product={product} />
        </Suspense> */}
      </section>
      {/* <section className="tab-review">
        <Tabs className="d-flex gap-20">
          {tabs.map((item, index) => (
            <Tab
              key={index}
              onClick={() => handleSetTab(index)}
              active={index === currentTab ? 'active' : ''}
            >
              {item.title}
            </Tab>
          ))}
        </Tabs>
        <Suspense fallback={<p>Loading...</p>}>
          <TabContent
            currentTab={currentTab}
            reviews={review}
            description={product.description}
          />
        </Suspense>
      </section> */}
    </main>
  );
};

export default Product;
