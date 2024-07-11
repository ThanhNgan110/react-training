// Import react router
import { Link } from 'react-router-dom';

// Import constants
import LINKS from '../../constants/links';

// Import component
import ListGroup from '../ListGroup';

// Import css
import './index.css';

const NavList = () => {
  return (
    <ListGroup className="nav-list">
      {LINKS.map(item => (
        <ListGroup.Item
          className="nav-item"
          key={item.id}
        >
          <Link
            className="nav-item"
            to={item.url}
          >
            {item.text}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default NavList;
