// Components
import Text from '../Text';
import StarRating from '../StarRating';
import Button from '../Button';

const CardHeader = ({ id, name, averageRating, reviewsCount, onOpen }) => {
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
          <Button
            variant="link"
            onClick={e => {
              e.preventDefault();
              onOpen(id);
            }}
          >
            Submit a review
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
