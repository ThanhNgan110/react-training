// Import components
import Trademarks from './Trademarks';
import Prices from './Prices';
import Colors from './Colors';

// Import css
import './index.css';

const SideBar = ({ productData }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <Trademarks types={productData.types} />
      </div>
      <div className="sidebar-item">
        <Prices maxPrice={productData.maxPrice} />
      </div>
      <div className="sidebar-item">
        <Colors colors={productData.colors} />
      </div>
    </div>
  );
};

export default SideBar;
