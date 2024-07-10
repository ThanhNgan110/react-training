import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Header from './layouts/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
