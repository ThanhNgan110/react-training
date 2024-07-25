import ListGroup from '../ListGroup';
import Star from '../Icons/Star';
import ListGroupItem from '../ListGroup/ListGroupItem';

const StarRating = ({
  className,
  max = 5,
  rating = 5,
  onClick,
  width,
  height
}) => {
  return (
    <ListGroup className={className}>
      {Array.from({ length: max }, (_, index) => (
        <ListGroupItem
          key={index}
          onClick={() => onClick(index + 1)}
        >
          <Star
            width={width}
            height={height}
            color={index < rating ? '#FFC600' : '#C1C8CE'}
          />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default StarRating;
