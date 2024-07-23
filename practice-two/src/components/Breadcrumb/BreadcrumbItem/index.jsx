import { Link } from 'react-router-dom';
import clsx from 'clsx';
import './index.css';

const BreadcrumbItem = ({ active = false, href, title }) => {
  return (
    <li
      className={clsx('breadcrumb-item', {
        active: active
      })}
      aria-current={active ? 'page' : undefined}
    >
      {active ? (
        title
      ) : (
        <Link
          className="link-primary"
          to={href}
        >
          {title}
        </Link>
      )}
    </li>
  );
};

export default BreadcrumbItem;
