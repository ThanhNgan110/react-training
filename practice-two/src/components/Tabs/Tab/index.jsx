import clsx from 'clsx';

import './index.css';

import Button from '../../Button';

const Tab = ({ className, active, onClick, children }) => {
  return (
    <div
      className={clsx('tab', {
        [className]: !!className
      })}
    >
      <Button
        className={`btn-tab ${active}`}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};

export default Tab;
