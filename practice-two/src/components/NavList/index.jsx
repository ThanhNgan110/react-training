// Import react router
import { Link } from 'react-router-dom';

// Import constants
import { PAGES } from '../../constants/route';

// Import component
import ListGroup from '../ListGroup';

// Import css
import './index.css';

const NavList = () => {
  const menus = [
    { path: PAGES.HOME.PATH, value: PAGES.HOME.VALUE },
    { path: PAGES.ABOUT.PATH, value: PAGES.ABOUT.VALUE },
    { path: PAGES.SNEAKERS.PATH, value: PAGES.SNEAKERS.VALUE },
    { path: PAGES.BELT.PATH, value: PAGES.BELT.VALUE },
    { path: PAGES.CONTACT.PATH, value: PAGES.CONTACT.VALUE }
  ];

  return (
    <ListGroup className="nav-list">
      {menus.map((item, index) => (
        <ListGroup.Item
          className="nav-item"
          key={`${index}`}
        >
          <Link
            className="nav-item text-uppercase"
            to={item.path}
          >
            {item.value}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default NavList;
