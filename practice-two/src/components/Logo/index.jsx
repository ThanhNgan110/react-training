import { Link } from 'react-router-dom';

// Image
import logo from '../../assets/images/logo.png';

// Component
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
