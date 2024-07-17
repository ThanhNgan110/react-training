// Import components
import Trademarks from './Trademarks';
import Prices from './Prices';
import Colors from './Colors';
import ListGroup from '../../components/ListGroup';

// Import css
import './index.css';

const SideBar = ({ settings, handleChangeColor }) => {
  const { types, maxPrice, colors } = settings;
  return (
    <ListGroup
      className="sidebar"
      vertical={true}
    >
      <ListGroup.Item className="sidebar-item">
        <Trademarks types={types} />
      </ListGroup.Item>
      <ListGroup.Item className="sidebar-item">
        <Prices maxPrice={maxPrice} />
      </ListGroup.Item>
      <ListGroup.Item className="sidebar-item">
        <Colors
          colors={colors}
          handleChangeColor={handleChangeColor}
        />
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SideBar;
