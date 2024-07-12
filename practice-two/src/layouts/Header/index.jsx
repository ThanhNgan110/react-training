// Import components
import Logo from '../../components/Logo';
import NavList from '../../components/NavList';
import SideBar from '../SideBar';

// Import css
import './index.css';

const Header = () => {
  return (
    <>
      <nav className="flex align-items-center justify-content-center wrapper-header">
        <Logo />
        <NavList />
      </nav>
      <main className="wrapper-main">
        <SideBar />
      </main>
    </>
  );
};

export default Header;
