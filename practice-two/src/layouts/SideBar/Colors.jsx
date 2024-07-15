// Import component
import Text from '../../components/Text';
import RadioGroup from '../../components/RadioGroup';

// Import css
import './index.css';

const Colors = ({ colors }) => {
  return (
    <>
      <Text
        variant="heading"
        as="h2"
        className="fs-3 fw-bold text-uppercase"
      >
        colors
      </Text>
      <RadioGroup colorSchemes={colors} />
    </>
  );
};

export default Colors;
