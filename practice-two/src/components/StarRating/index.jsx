import ListGroup from '../ListGroup';
import Star from '../Icons/Star';
import ListGroupItem from '../ListGroup/ListGroupItem';

const StarRating = ({ className, starFull = 5, onClick }) => {
  return (
    <ListGroup className={className}>
      {Array.from({ length: 5 }, (_, index) => (
        <ListGroupItem
          key={index}
          onClick={onClick}
        >
          <Star
            width="12"
            height="12"
            color={index < starFull ? '#FFC600' : '#C1C8CE'}
          />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default StarRating;
