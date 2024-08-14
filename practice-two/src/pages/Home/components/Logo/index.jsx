import { Link } from 'react-router-dom';

// Image
import logo from '../../../../assets/images/logo.png';

// Component
import Image from '../../../../components/Image';

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
