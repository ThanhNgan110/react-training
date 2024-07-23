import ReviewList from '../../ReviewList';
import Text from '../../Text';

import './index.css';

const TabContent = ({ currentTab, reviews, description }) => {
  return (
    <div className="tab-content">
      {currentTab === 0 ? (
        <Text
          as="p"
          className="fs-6 fw-normal text-gray"
        >
          {description}
        </Text>
      ) : (
        <ReviewList reviews={reviews} />
      )}
    </div>
  );
};

export default TabContent;
