import { Link } from 'react-router-dom';

import Text from '../../components/Text';

import './index.css';

const NotFound = () => {
  return (
    <section className="section">
      <Text
        as="p"
        className="page"
      >
        Ooops!!! The page you are looking for is not found
      </Text>
      <Link
        className="back-home"
        to="/"
      >
        Back to home
      </Link>
    </section>
  );
};

export default NotFound;
