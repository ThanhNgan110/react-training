import clsx from 'clsx';

// Import css
import './index.css';

const Heading = ({ className, as: Heading, children, size }) => {
  return (
    <Heading
      className={clsx('heading', {
        'heading-sm': size === 'sm',
        'heading-lg': size === 'lg',
        'heading-xlg': size === 'xlg',
        [className]: !!className
      })}
    >
      {children}
    </Heading>
  );
};

export default Heading;
