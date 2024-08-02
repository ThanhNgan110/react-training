import ReviewCard from '../ReviewCard';

import './index.css';

const ReviewList = ({ reviews }) => {
  return (
    <div className="reviews">
      {reviews?.map((item, index) => (
        <ReviewCard
          key={`${index}`}
          reviews={item}
        />
      ))}
    </div>
  );
};

export default ReviewList;
