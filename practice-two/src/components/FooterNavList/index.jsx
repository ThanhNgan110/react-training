// Components
import Text from '../Text';
import ListGroup from '../ListGroup';

import './index.css';

const FooterNavList = ({classNameItem, title, items }) => {
  return (
    <>
      <div className="d-flex flex-column">
        <Text
          as="h6"
          className="fs-3 fw-normal text-space"
        >
          {title}
        </Text>
        <ListGroup
          className="gap-10"
          vertical="false"
        >
          {items.map(index => (
            <ListGroup.Item className={classNameItem} key={`${index}`}>{index}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
};

export default FooterNavList;
