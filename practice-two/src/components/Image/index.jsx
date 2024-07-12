import clsx from 'clsx';

// Import css
import './index.css';

const Image = ({ className, src, alt, width, height }) => {
  return (
    <img
      className={clsx('img', {
        [className]: !!className,
        'full-w': width === 'full-w',
        'full-h': height === 'full-h'
      })}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
