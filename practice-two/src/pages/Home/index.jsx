// Import react
import { useState, useEffect } from 'react';

//Import component
import SideBar from '../../layouts/SideBar';
import Banner from '../../components/Banner';
import Bar from '../../components/Bar';

// Import constant
import { OPTIONS } from '../../constants/label';

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

  const data = [
    { name: OPTIONS.NAME, value: 'name' },
    { name: OPTIONS.PRICE, value: 'price' }
  ];

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
      <div className="d-flex wrapper-content">
        <SideBar settings={settings} />
        <main>
          <Banner />
          <Bar data={data}/>
        </main>
      </div>
    </>
  );
};

export default Home;
