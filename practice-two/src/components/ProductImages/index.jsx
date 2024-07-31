import { useState } from 'react';

import './index.css';

import Image from '../Image';

const ProductImages = ({ images = [], name }) => {
  const [indexCurrent, setIndexCurrent] = useState(0);

  const handleSetImage = index => {
    setIndexCurrent(index);
  };

  return (
    <div className="d-flex flex-column product-img">
      <Image
        src={images[indexCurrent]}
        alt={name}
        width="387px"
        height="288px"
      />
      <div className="d-flex flex-row gallery">
        {images.map((image, index) => (
          <Image
            className={`item-gallery ${indexCurrent === index ? 'active' : ''}`}
            key={index}
            src={image}
            alt={`${name}-${index}`}
            width="87px"
            height="86px"
            onClick={() => handleSetImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
