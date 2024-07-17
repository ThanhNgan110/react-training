// Import router
import { Outlet } from 'react-router-dom';

// Import pages
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
