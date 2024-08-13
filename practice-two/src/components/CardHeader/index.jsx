import { useState } from 'react';
import Text from '../Text';
import StarRating from '../StarRating';
import Button from '../Button';
import ReviewDialog from '../ReviewDialog';

const CardHeader = ({ id, name, averageRating, reviewsCount, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

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
              handleOpen();
            }}
          >
            Submit a review
          </Button>
        </div>
      </div>
      {isOpen && (
        <ReviewDialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmit={onSubmit}
          productId={id}
        />
      )}
    </>
  );
};

export default CardHeader;
