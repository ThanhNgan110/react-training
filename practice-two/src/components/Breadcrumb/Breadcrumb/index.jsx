import clsx from 'clsx';

// Component
import BreadcrumbItem from '../BreadcrumbItem';

// Css
import './index.css';

const Breadcrumb = ({ className, items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol
        className={clsx('breadcrumb', {
          [className]: !!className
        })}
      >
        {items.map((item, index) => (
          <BreadcrumbItem
            key={`${index}`}
            title={item.title}
            href={item.href}
            active={item.active}
          />
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
