//Import react
import { Link } from 'react-router-dom';

// Import component
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import ListGroup from '../../components/ListGroup';

// Import css
import './index.css';

const Trademarks = ({ types }) => {
  return (
    <div className="box-item">
      <Heading
        as="h2"
        size="lg"
        className="heading-sidebar"
      >
        TRADEMARKS
      </Heading>
      <ListGroup
        className="list-group-space"
        horizontal={false}
      >
        {types.map((item, index) => (
          <ListGroup.Item key={index}>
            <Link
              className="flex justify-content-between list-group-item"
              to=""
            >
              <Text
                as="p"
                size="lg"
              >
                {item.name}
              </Text>
              <Text
                as="p"
                size="lg"
                className="text-number"
              >
                {item.count}
              </Text>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Trademarks;
