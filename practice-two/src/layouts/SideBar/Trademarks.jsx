//Import react
import { Link } from 'react-router-dom';

// Import component
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import ListGroup from '../../components/ListGroup';

// Import css
import './index.css';

const Trademarks = () => {
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
        <ListGroup.Item>
          <Link
            className="flex justify-content-between list-group-item"
            to=""
          >
            <Text
              as="p"
              size="lg"
            >
              Airmax
            </Text>
            <Text
              as="p"
              size="lg"
              className="text-number"
            >
              48
            </Text>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link
            className="flex justify-content-between list-group-item"
            to=""
          >
            <Text
              as="p"
              size="lg"
            >
              Nike
            </Text>
            <Text
              as="p"
              size="lg"
              className="text-number"
            >
              14
            </Text>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link
            className="flex justify-content-between list-group-item"
            to=""
          >
            <Text
              as="p"
              size="lg"
            >
              Vans
            </Text>
            <Text
              as="p"
              size="lg"
              className="text-number"
            >
              23
            </Text>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link
            className="flex justify-content-between list-group-item"
            to=""
          >
            <Text
              as="p"
              size="lg"
            >
              All Stars
            </Text>
            <Text
              as="p"
              size="lg"
              className="text-number"
            >
              1
            </Text>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link
            className="flex justify-content-between list-group-item"
            to=""
          >
            <Text
              as="p"
              size="lg"
            >
              Adidas
            </Text>
            <Text
              as="p"
              size="lg"
              className="text-number"
            >
              95
            </Text>
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Trademarks;
