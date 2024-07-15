import clsx from 'clsx';
import './index.css';

const Text = ({ className, variant, as: Text, ellipsis, children }) => {
  return (
    <Text
      variant={variant}
      className={clsx('', {
        [className]: !!className,
        'text-ellipsis': ellipsis
      })}
    >
      {children}
    </Text>
  );
};

export default Text;
