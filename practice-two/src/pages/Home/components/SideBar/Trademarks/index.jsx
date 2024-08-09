// Import component
import Text from '../../../../../components/Text';
import ListGroup from '../../../../../components/ListGroup';

// Import css
import './index';

const Trademarks = ({ types, onClick, activeSelected }) => {
  return (
    <>
      <Text
        variant="heading"
        as="h2"
        className="fs-3 fw-medium text-uppercase"
      >
        trademarks
      </Text>
      <ListGroup
        className="list-group-space"
        vertical={true}
      >
        {types.map((item, index) => (
          <ListGroup.Item
            key={`${index}`}
            onClick={() => onClick(item.type)}
          >
            <div className="d-flex justify-content-between list-group-item group-item">
              <Text
                variant="text"
                as="p"
                className={`fs-3 text-secondary ${
                  activeSelected === item.type ? 'active' : ''
                }`}
              >
                {item.type}
              </Text>

              <Text
                variant="text"
                as="p"
                className={`fs-3 text-secondary ${
                  activeSelected === item.type ? 'active' : ''
                }`}
              >
                {item.count}
              </Text>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Trademarks;
