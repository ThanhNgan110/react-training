import { Link } from 'react-router-dom';

import { menus } from '../../constants/route';

import ListGroup from '../ListGroup';

import Logo from '../Logo';

import './index.css';

const NavBar = () => {
  return (
    <nav className="d-flex align-items-center nav">
      <Logo />
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
    </nav>
  );
};

export default NavBar;
