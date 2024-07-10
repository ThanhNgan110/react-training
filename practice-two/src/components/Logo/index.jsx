// Import image
import logo from '../../assets/images/logo.png';

// Import component
import Image from '../Image/index.jsx';

const Logo = () => {
  return (
    <h1 className="logo">
      <Image
        src={logo}
        alt="logo"
      />
    </h1>
  );
};

export default Logo;
