import clsx from 'clsx';

import BreadcrumbItem from '../BreadcrumbItem';

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