import { Suspense } from 'react';
// Import router
import { Routes, Route } from 'react-router-dom';

// Import css
import './styles/index.css';

// Import pages
import Layout from './layouts';
import Home from './pages/Home';
import Product from './pages/Product';
import { PAGES } from './constants/route';

import Loading from './components/Loading';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path={PAGES.PRODUCT.PATH}
            element={<Product />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
