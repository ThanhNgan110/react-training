// Import router
import { Link } from 'react-router-dom';

// Import image
import logo from '../../assets/images/logo.png';

// Import component
import Image from '../Image/index.jsx';

const Logo = () => {
  return (
    <Link to="/">
      <Image
        src={logo}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
