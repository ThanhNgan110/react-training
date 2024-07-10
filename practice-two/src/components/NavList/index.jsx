// Import constants
import { links } from '../../constants/links';

// Import component
import NavListItem from '../NavListItem';

// Import css
import './index.css';

const NavList = () => {
  return (
    <ul className="flex nav-list">
      {links.map(item => (
        <NavListItem
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
};

export default NavList;
