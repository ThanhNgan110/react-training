import { useParams } from 'react-router-dom';
import { useState } from 'react';

import useFetchProduct from '../../hooks/useFetchProduct';

import { getProductById } from '../../services/product-service';

import './index.css';

import ProductImages from '../../components/ProductImages';
import ProductContent from '../../components/ProductContent';
import TabContent from '../../components/Tabs/TabContent';

import Tabs from '../../components/Tabs';
import Tab from '../../components/Tabs/Tab';

import { TAB } from '../../constants/tab';

const Product = () => {
  const { id } = useParams();

  const { products, loading, error } = useFetchProduct(getProductById, id);

  const [valueCurrent, setValueCurrent] = useState(0);  // Default to first tab

  const tabs = [{ title: TAB.PRODUCT_INFO }, { title: TAB.REVIEWS }];

  const handleSetValue = index => {
    setValueCurrent(index);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product</div>;
  }

  if (!products) {
    return <div>No product found</div>;
  }

  return (
    <div className="wrapper-product">
      <div className="d-flex gap-40 section-product">
        <ProductImages images={products.image} />
        <ProductContent products={products} />
      </div>
      <div>
        <Tabs className="d-flex gap-20">
          {tabs.map((item, index) => (
            <Tab
              key={index}
              onClick={() => handleSetValue(index)}
              active={index === valueCurrent ? 'active' : ''}
            >
              {item.title}
            </Tab>
          ))}
        </Tabs>
        <TabContent currentTab={valueCurrent} />
      </div>
    </div>
  );
};

export default Product;
