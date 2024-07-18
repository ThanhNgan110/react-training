import ListGroup from '../ListGroup';
import Star from '../Icons/Star';
import ListGroupItem from '../ListGroup/ListGroupItem';

const StarRating = ({ starFull = 5 }) => {
  return (
    <ListGroup>
      {Array.from({ length: 5 }, (_, index) => (
        <ListGroupItem key={index}>
          <Star
            width="12px"
            height="12px"
            color={index < starFull ? "#FFC600" : "#C1C8CE"}
          />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default StarRating;
