import { useParams } from 'react-router-dom';
import { useState } from 'react';

import useFetchProduct from '../../hooks/useFetchProduct';
import { getProductById } from '../../services/product-service';

import './index.css';

import ProductImages from '../../components/ProductImages';
import ProductContent from '../../components/ProductContent';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tabs/Tab';
import TabContent from '../../components/Tabs/TabContent';

import { TAB } from '../../constants/tab';

const Product = () => {
  const { id } = useParams();

  const { products, loading, error } = useFetchProduct(getProductById, id);

  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [{ title: TAB.PRODUCT_INFO }, { title: TAB.REVIEWS }];

  const reviews = [
    {
      imgUrl:
        'https://github.com/user-attachments/assets/4b707bb4-9b77-4086-b2b1-0a48724fd060',
      name: 'James Lawson',
      rating: 5,
      comment:
        'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
      ratingDate: '2024-05-24T04:07:43.07Z',
      id: '04798deb-586e-4006-92dc-11d852c850bc'
    },
    {
      imgUrl:
        'https://github.com/user-attachments/assets/90dbbc19-ba7f-4098-a2df-e53031683c46',
      name: 'Laura Octavian',
      rating: 5,
      comment:
        'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
      ratingDate: '2024-07-24T04:07:43.07Z',
      id: '04798deb-586e-4006-92dc-11d852c850dc'
    }
  ];

  const handleSetTab = index => {
    setCurrentTab(index);
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
      <div className="tab-review">
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
          reviews={reviews}
          description={products.description}
        />
        {/* <ReviewList reviews={reviews} /> */}
      </div>
    </div>
  );
};

export default Product;
