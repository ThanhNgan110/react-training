import { useState } from 'react';

// Components
import Modal from '../Modal';
import Text from '../Text';
import Textarea from '../Textarea';
import Button from '../Button';
import StarRating from '../StarRating';

// Css
import './index.css';

const ReviewDialog = ({ productId, open, onSubmit, onClose }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleChangeRating = numberRating => {
    setRating(numberRating);
  };

  const handleChangeComment = e => {
    setComment(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('productId', productId);

    if (typeof onSubmit === 'function') {
      onSubmit({
        rating,
        comment,
        productId
      });
      setRating(5);
      setComment('');
    }
  };

  return (
    <Modal
      open={open}
      modalHeader={
        <div className="header-group">
          <Text
            as="p"
            className="text-info fw-semibold fs-1"
          >
            Submit Your Review
          </Text>
          <Button
            className="btn-close "
            iconClassName="icon-close"
            onClick={e => {
              e.preventDefault();
              onClose();
              console.log('123456');
            }}
          />
        </div>
      }
      modalBody={
        <>
          <form
            className="form"
            onSubmit={handleSubmit} // Updated onSubmit handler
          >
            <Text
              as="p"
              className="label"
            >
              Please write about your level of satisfaction with your product
            </Text>
            <StarRating
              width={32}
              height={32}
              className="d-flex gap-20 justify-content-center"
              rating={rating}
              onClick={handleChangeRating}
            />
            <Text
              as="p"
              className="label"
            >
              Write your review here
            </Text>
            <Textarea
              className="textarea-size"
              placeholder="Write your review here"
              value={comment}
              onChange={handleChangeComment}
            />
            <Button
              className="btn-review"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </>
      }
    />
  );
};

export default ReviewDialog;
