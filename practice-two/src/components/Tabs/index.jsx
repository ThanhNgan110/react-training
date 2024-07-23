import clsx from 'clsx';

import './index.css';

const Tabs = ({ className, variant, children }) => {
  return (
    <div
      className={clsx('tabs', {
        [className]: !!className,
        vertical: variant === 'vertical',
        hozitional: variant === 'hozitional'
      })}
    >
      {children}
    </div>
  );
};

export default Tabs;
