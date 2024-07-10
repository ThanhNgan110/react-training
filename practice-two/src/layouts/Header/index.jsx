// Import components
import Logo from '../../components/Logo';
import NavList from '../../components/NavList';

// Import css
import './index.css';

const Header = () => {
  return (
    <div className="flex align-center justify-center wrapper-header">
      <Logo />
      <NavList />
    </div>
  );
};

export default Header;
