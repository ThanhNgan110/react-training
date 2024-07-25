import Modal from '../Modal';
import Text from '../Text';
import Textarea from '../Textarea';
import Button from '../Button';
import StarRating from '../StarRating';

import './index.css';

const ModalReview = ({ starFull, onSubmit }) => {
  return (
    <Modal
      modalHeader={
        <div className="header-group">
          <Text
            as="p"
            className="text-info fw-semibold fs-1"
          >
            Review
          </Text>
          <Button iconClassName="btn-close icon-close" />
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
              Please write about your level of satisfaction with your product
            </Text>
            <StarRating
              className="d-flex gap-20 justify-content-center"
              starFull={starFull}
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
            />
          </form>
        </>
      }
      modalFooter={<Button className="btn-review">Submit</Button>}
    />
  );
};

export default ModalReview;
