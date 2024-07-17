import banner from '../../assets/images/banner.png';

import Image from '../Image';
import Text from '../Text';

import './index.css';

const Banner = () => {
  return (
    <div className="d-flex banner">
      <div className="d-flex justify-content-center banner-content">
        <Text
          as="h2"
          className="text-white title-banner"
        >
          Adidas Men Running Sneakers
        </Text>
        <Text
          as="p"
          className="text-white fs-5 fw-normal"
        >
          Performance and design. Taken right to the edge.
        </Text>
      </div>
      <Image
        src={banner}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
