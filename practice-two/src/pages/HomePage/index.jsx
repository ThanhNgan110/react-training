//Import component
import Header from '../../layouts/Header';
import SideBar from '../../layouts/SideBar';

// Import css
import './index.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="wrapper-main">
        <SideBar />
      </main>
    </>
  );
};

export default HomePage;
