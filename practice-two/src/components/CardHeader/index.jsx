import { Link } from 'react-router-dom';

// Components
import Text from '../Text';
import StarRating from '../StarRating';
import ReviewDialog from '../ReviewDialog';

const CardHeader = ({ id, name, averageRating, reviewsCount, onSubmit }) => {
  return (
    <>
      <Link to={`/products/${id}`}>
        <Text
          as="h2"
          variant="primary"
        >
          {name ? name : ''}
        </Text>
      </Link>
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center gap-10 divider">
          <StarRating
            rating={averageRating}
            width="12"
            height="12"
          />
          <Text
            as="p"
            className="fs-4 text-gray"
          >
            {reviewsCount ?? 0} reviews
          </Text>
          <ReviewDialog
            productId={id}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default CardHeader;
