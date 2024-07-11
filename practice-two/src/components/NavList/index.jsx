// Import react router
import { Link } from 'react-router-dom';

// Import constants
import LINKS from '../../constants/links';

// Import component
import ListGroup from '../ListGroup';

// Import css
import './index.css';

const NavList = () => {
  const { List, ListItem } = ListGroup;
  return (
    <List className="nav-list">
      {LINKS.map(item => (
        <ListItem
          className="nav-item"
          key={item.id}
        >
          <Link
            className="nav-item"
            to={item.url}
          >
            {item.text}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
