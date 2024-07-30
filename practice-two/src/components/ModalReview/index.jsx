import { useState, useContext } from 'react';

import Modal from '../Modal';
import Text from '../Text';
import Textarea from '../Textarea';
import Button from '../Button';
import StarRating from '../StarRating';

import { ModalContext } from '../../context';

import './index.css';

const ModalReview = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const { isOpen, handleOpenModal } = useContext(ModalContext);

  const handleChangeRating = numberRating => {
    setRating(numberRating);
  };

  const handleReviewChange = e => {
    setReview(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    // code here
    handleOpenModal();
  };

  return (
    <>
      {isOpen && (
        <Modal
          className={`${isOpen ? 'show' : 'close'}`}
          modalHeader={
            <div className="header-group">
              <Text
                as="p"
                className="text-info fw-semibold fs-1"
              >
                Review
              </Text>
              <Button
                iconClassName="btn-close icon-close"
                onClick={handleOpenModal}
              />
            </div>
          }
          modalBody={
            <>
              <form
                className="form"
                onSubmit={onSubmit}
              >
                <Text
                  as="p"
                  className="label"
                >
                  Please write about your level of satisfaction with your
                  product
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
                  value={review}
                  onChange={handleReviewChange}
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
      )}
    </>
  );
};

export default ModalReview;
