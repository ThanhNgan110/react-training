import clsx from 'clsx';

// Import css
import './index.css';

const Image = ({ className, src, alt, width, height }) => {
  return (
    <img
      className={clsx('img', {
        [className]: !!className
      })}
      src={src}
      alt={`img ${alt}` }
      width={width}
      height={height}
    />
  );
};

export default Image;
