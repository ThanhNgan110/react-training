import clsx from 'clsx';

// Import css
import './index.css';

const Heading = ({ className, as: Heading, heading, size }) => {
  return (
    <Heading
      className={clsx(className, {
        'heading-sm': size === 'sm',
        'heading-lg': size === 'lg',
        'heading-xlg': size === 'xlg'
      })}
    >
      {heading}
    </Heading>
  );
};

export default Heading;
