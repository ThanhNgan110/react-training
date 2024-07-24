import { useState } from 'react';

import './index.css';

import Image from '../Image';

const ProductImages = ({ images = [], title }) => {
  const [indexCurrent, setIndexCurrent] = useState(0);

  const handleSetImage = index => {
    setIndexCurrent(index);
  };

  return (
    <div className="d-flex flex-column product-img">
      <Image
        src={images[indexCurrent]}
        alt={title}
        width="387px"
        height="288px"
      />
      <div className="d-flex flex-row gallery">
        {images.map((image, index) => (
          <Image
            className={`item-gallery ${indexCurrent === index ? 'active' : ''}`}
            key={index}
            src={image}
            alt={title}
            width="89px"
            onClick={() => handleSetImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
