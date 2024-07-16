// Import router
import { Link } from 'react-router-dom';

// Import image
import logo from '../../assets/images/logo.png';

// Import component
import Image from '../Image/index.jsx';

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="logo">
        <Image
          src={logo}
          alt="logo"
        />
      </h1>
    </Link>
  );
};

export default Logo;
