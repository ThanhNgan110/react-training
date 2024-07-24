import { useState } from 'react';

import './index.css';

import ProductImages from '../../components/ProductImages';
import ProductContent from '../../components/ProductContent';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tabs/Tab';
import TabContent from '../../components/Tabs/TabContent';

// import { PAGES } from '../../constants/route';

import { TAB } from '../../constants/tab';

import { productMock, reviews } from '../../mocks/product';

const Product = () => {
  // mock data
  const product = productMock;
  const review = reviews;

  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [{ title: TAB.PRODUCT_INFO }, { title: TAB.REVIEWS }];

  // breadcrumb
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
        <ProductImages images={product.image} />
        <ProductContent product={product} />
      </section>
      <section className="tab-review">
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
        <TabContent
          currentTab={currentTab}
          reviews={review}
          description={product.description}
        />
      </section>
    </main>
  );
};

export default Product;
