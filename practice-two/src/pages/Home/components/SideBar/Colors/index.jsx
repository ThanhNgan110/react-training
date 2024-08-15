// Components
import { Text, ColorsPicker } from '../../../../../components';

// Css
import './index';

const Colors = ({ colors, handleChangeColor }) => {
  return (
    <>
      <Text
        variant="heading"
        as="h2"
        className="fs-3 fw-medium text-uppercase"
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
