import Text from '../Text';
import StarRating from '../StarRating';
import ReviewDialog from '../ReviewDialog';

const CardHeader = ({ id, name, averageRating, reviewsCount, onSubmit }) => {
  return (
    <>
      <Text
        as="h2"
        variant="primary"
      >
        {name ? name : ''}
      </Text>
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
          <ReviewDialog />
        </div>
      </div>
    </>
  );
};

export default CardHeader;
