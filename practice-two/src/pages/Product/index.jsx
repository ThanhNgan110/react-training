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

import { PAGES } from '../../constants/route';

import { TAB } from '../../constants/tab';

import { reviews } from '../../mocks/product';
import { getProductById } from '../../services/product-service';

const Product = () => {
  let { id } = useParams();

  // mock data
  const review = reviews;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [{ title: TAB.PRODUCT_INFO }, { title: TAB.REVIEWS }];

  const items = [
    { title: PAGES.PRODUCT.VALUE, href: PAGES.HOME.PATH },
    { title: product ? product.name : '', href: '', active: true }
  ];

  const handleSetTab = index => {
    setCurrentTab(index);
  };

  useEffect(() => {
    const fetchProductById = async () => {
      setIsLoading(true);
      const { data, error } = await getProductById(id);
      if (!error) {
        setProduct(data);
      }
      setIsLoading(false);
    };
    fetchProductById();
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
          <ProductImages images={product.image} />
          <ProductContent product={product} />
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
              reviews={review}
              description={product.description}
            />
          </Tabs>
        </section>
      </main>
    </>
  );
};

export default Product;
