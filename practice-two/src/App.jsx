import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import HomePage from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage />}/>
      </Routes>
    </Router>
  );
};

export default App;
