// Import components
import Trademarks from './Trademarks';
import Prices from './Prices';
import Colors from './Colors';
import ListGroup from '../../components/ListGroup';

// Import css
import './index.css';

const SideBar = ({ productData }) => {
  return (
    <ListGroup
      className="sidebar"
      vertical={true}
    >
      <ListGroup.Item className="sidebar-item">
        <Trademarks types={productData.types} />
      </ListGroup.Item>
      <ListGroup.Item className="sidebar-item">
        <Prices maxPrice={productData.maxPrice} />
      </ListGroup.Item>
      <ListGroup.Item className="sidebar-item">
        <Colors colors={productData.colors} />
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SideBar;
