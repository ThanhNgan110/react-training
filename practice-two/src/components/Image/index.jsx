import clsx from 'clsx';
import './index.css';

const Image = ({ className, imgUrl, alt, width, height }) => {
  return (
    <img
      src={imgUrl}
      alt={alt}
      width={width}
      height={height}
      className={clsx('img', {
        [className]: !!className
      })}
    />
  );
};

export default Image;
