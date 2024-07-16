// Import react
import { useState, useEffect } from 'react';

//Import component
import Header from '../../layouts/Header';
import SideBar from '../../layouts/SideBar';

// Import css
import './index.css';

// Import api
import { getSettingData } from '../../services/filter-service';

const Home = () => {
  const [settings, setSettings] = useState({
    types: [],
    colors: [],
    maxPrice: 0
  });

  useEffect(() => {
    const fetchProductTypes = async () => {
      // Call loading icon if needed
      const { data, error } = await getSettingData();
      if (!error) {
        setSettings(data);
      }
      // Hide loading icon if needed
    };

    fetchProductTypes();
  }, []);
  return (
    <>
      <Header />
      <div className="wrapper-content">
        <SideBar settings={settings} />
      </div>
    </>
  );
};

export default Home;
