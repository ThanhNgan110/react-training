import Image from '../Image';
import Text from '../Text';
import StarRating from '../StarRating';

import './index.css';

const ReviewCard = ({ reviews }) => {
  const { imgUrl, name, ratting, comment, ratingDate } = reviews;
  return (
    <article className="d-flex flex-column gap-16 card-review">
      <div className="d-flex gap-16">
        <Image
          src={imgUrl}
          alt="avatar"
        />
        <div className="d-flex flex-column">
          <Text as="h4">{name}</Text>
          <StarRating
            starFull={ratting}
            width={16}
            height={16}
          />
        </div>
      </div>
      <Text
        as="p"
        className="comment"
      >
        {comment}
      </Text>
      <Text
        as="p"
        className="date"
      >
        {ratingDate}
      </Text>
    </article>
  );
};

export default ReviewCard;
