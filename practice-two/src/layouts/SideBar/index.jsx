// Import components
import Trademarks from './Trademarks';
import Prices from './Prices';
import Colors from './Colors';

// Import css
import './index.css';

const SideBar = ({ productData }) => {
  return (
    <div className="sidebar">
      <Trademarks types={productData.types} />
      <Prices maxPrice={productData.maxPrice} />
      <Colors colors={productData.colors} />
    </div>
  );
};

export default SideBar;
