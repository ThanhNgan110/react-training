import ListGroup from '../ListGroup';
import { Link } from 'react-router-dom';

import './index.css';

const Pagination = ({ count, currentPage, onClick }) => {
  return (
    <ListGroup className="pagination">
      {Array.from({ length: count }, (_, index) => (
        <ListGroup.Item
          className="page-item"
          key={index}
        >
          <Link
            className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
            to={`${index}`}
            onClick={() => onClick(index + 1)}
          >
            {index + 1}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Pagination;
