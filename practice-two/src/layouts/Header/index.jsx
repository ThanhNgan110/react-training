// Import components
import Logo from '../../components/Logo';
import NavList from '../../components/NavList';

// Import css
import './index.css';

const Header = () => {
  return (
    <>
      <nav className="flex align-items-center justify-content-center wrapper-header">
        <Logo />
        <NavList />
      </nav>
    </>
  );
};

export default Header;
