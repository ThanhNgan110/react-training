import clsx from 'clsx';
import './index.css';

const Text = ({ className, as: Text, size, ellipsis, children }) => {
  return (
    <Text
      className={clsx('', {
        [className]: !!className,
        ellipsis: ellipsis,
        'text-size-sm': size === 'sm',
        'text-size-lg': size === 'lg',
        'text-size-xlg': size === 'xlg'
      })}
    >
      {children}
    </Text>
  );
};

export default Text;
