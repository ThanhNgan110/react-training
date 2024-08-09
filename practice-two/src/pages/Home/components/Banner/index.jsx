// Components
import Image from '../../../../components/Image';
import Text from '../../../../components/Text';

// Css
import './index.css';

const Banner = ({ data }) => {
  const { title, subTitle, image } = data;
  return (
    <div className="d-flex banner">
      <div className="d-flex justify-content-center banner-content">
        <Text
          as="h2"
          className="text-white title-banner"
        >
          {title}
        </Text>
        <Text
          as="p"
          className="text-white fs-5 fw-normal"
        >
          {subTitle}
        </Text>
      </div>
      <Image
        src={image}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
