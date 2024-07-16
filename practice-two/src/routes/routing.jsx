// Import router
import { Routes, Route } from 'react-router-dom';

// // Import constant
// import { PAGES } from '../constants/route';

// Import pages
import Layout from '../layouts/LayoutMain';
import Home from '../pages/Home';

const Routing = () => {
  <Routes>
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        index
        element={<Home />}
      />
    </Route>
  </Routes>;
};

export default Routing;
