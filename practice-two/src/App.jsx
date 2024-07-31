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

import { users } from './mocks/users';

import { getRandomUser } from './utils/randomUser';

import { ModalContext, UserContext } from './context';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [userName, setUserName] = useState('');

  const handleOpenModal = productId => {
    setIsOpen(prev => !prev);
    setSelectedProductId(productId);
  };

  const handleRandomUser = () => {
    setUserName(users[getRandomUser(users.length)]);
    console.log('userName', userName);
  };

  return (
    <>
      <UserContext.Provider value={{ userName, handleRandomUser }}>
        <ModalContext.Provider
          value={{
            isOpen,
            selectedProductId,
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
      </UserContext.Provider>
    </>
  );
};

export default App;
