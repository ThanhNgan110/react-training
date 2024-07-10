// Import react
import { NavLink } from 'react-router-dom';

//Import css
import './index.css';

const NavListItem = ({ item }) => {
  const { id, text, url } = item;

  return (
    <li
      className="nav-item"
      key={id}
    >
      <NavLink
        to={url}
        className={({ isActive }) => (isActive ? 'active' : 'nav-item')}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavListItem;
