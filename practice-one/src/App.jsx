import Title from './components/Title';
// import NumberTask from './components/NumberTask';
import Button from './components/common/Button';
import iconAdd from '../src/assets/images/iconButton/iconAdd.png';
import Form from './components/Form';
import '../src/styles/abstracts/index.css';

import { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowForm = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Title />

      {/* <NumberTask /> */}
      {!isOpen && (
        <Button
          className="btn-toggle"
          text="Add Task"
          icon={iconAdd}
          onClick={handleShowForm}
        />
      )}

      {isOpen && <Form />}
    </>
  );
};

export default App;
