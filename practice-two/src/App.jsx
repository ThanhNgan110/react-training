import { useState } from 'react';
// Import router
import { Routes, Route } from 'react-router-dom';

// Import css
import './styles/index.css';

// Import pages
import Layout from './layouts';
import Home from './pages/Home';
import Product from './pages/Product';
import ModalReview from './components/ModalReview';

import { PAGES } from './constants/route';

import { ModalContext } from './context';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <ModalContext.Provider
        value={{
          isOpen,
          handleOpenModal
        }}
      >
        <ModalReview />
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path={PAGES.PRODUCT.PATH}
              element={<Product />}
            />
          </Route>
        </Routes>
      </ModalContext.Provider>
    </>
  );
};

export default App;
