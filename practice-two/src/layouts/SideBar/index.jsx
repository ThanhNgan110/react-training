// Import component
import Trademarks from './Trademarks';
import Prices from './Prices';
import Colors from './Colors';

// Import css
import './index.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <Trademarks />
      <Prices />
      <Colors />
    </div>
  );
};

export default SideBar;
