// Import component
import Text from '../../../components/Text';
import ListGroup from '../../../components/ListGroup';
import LabelInfo from '../../../components/LabelInfo';

// Import css
import './index';

const Trademarks = ({ types, onClick }) => {

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
          <ListGroup.Item 
            key={`${index}`}
          >
            <LabelInfo
              label={item.type}
              number={item.count}
              onClick={onClick}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Trademarks;
