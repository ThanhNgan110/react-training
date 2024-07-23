import ReviewCard from '../ReviewCard';

import './index.css';

const ReviewList = ({ reviews }) => {
  return (
    <div className="reviews">
      {reviews.map(item => (
        <ReviewCard
          key={item.id}
          reviews={item}
        />
      ))}
    </div>
  );
};

export default ReviewList;
