// Import component
import BoxSideCategory from './BoxSideCategory';
import BoxSidePrice from './BoxSidePrice';
import BoxSideColor from './BoxSideColor';

// Import css
import './index.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <BoxSideCategory />
      <BoxSidePrice />
      <BoxSideColor/>
    </div>
  );
};

export default SideBar;
