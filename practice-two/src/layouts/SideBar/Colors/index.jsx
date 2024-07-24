// Import component
import Text from '../../../components/Text';
import ColorsPicker from '../../../components/ColorsPicker';

// Import css
import './index';

const Colors = ({ colors, handleChangeColor }) => {
  return (
    <>
      <Text
        variant="heading"
        as="h2"
        className="fs-3 fw-bold text-uppercase"
      >
        colors
      </Text>
      <ColorsPicker
        className="justify-content-between"
        colors={colors}
        onChange={handleChangeColor}
      />
    </>
  );
};

export default Colors;
