import ListGroup from '../ListGroup';
import Star from '../Icons/Star';
import ListGroupItem from '../ListGroup/ListGroupItem';

const StarRating = ({ starFull = 5 }) => {
  return (
    <ListGroup>
      {Array.from({ length: 5 }, (_, index) => (
        <ListGroupItem key={index}>
          <Star
            width="12"
            height="12"
            color={index < starFull ? "#FFC600" : "#C1C8CE"}
          />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default StarRating;
