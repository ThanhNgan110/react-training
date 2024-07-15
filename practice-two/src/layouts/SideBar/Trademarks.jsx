//Import react
import { Link } from 'react-router-dom';

// Import component
import Text from '../../components/Text';
import ListGroup from '../../components/ListGroup';

// Import css
import './index.css';

const Trademarks = ({ types }) => {
  return (
    <>
      <Text
        variant="heading"
        as="h2"
        className="fs-3 fw-bold text-uppercase"
      >
        trademarks
      </Text>
      <ListGroup
        className="list-group-space"
        vertical={true}
      >
        {types.map((item, index) => (
          <ListGroup.Item key={index}>
            <Link
              className="d-flex justify-content-between list-group-item"
              to=""
            >
              <Text
                variant="text"
                as="p"
                className="fs-3"
              >
                {item.name}
              </Text>
              <Text
                variant="text"
                as="p"
                className="fs-3 text-secondary"
              >
                {item.count}
              </Text>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Trademarks;
