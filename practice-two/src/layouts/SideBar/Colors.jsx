// Import component
import Heading from '../../components/Heading';
import RadioGroup from '../../components/RadioGroup';

// Import css
import './index.css';

const Colors = ({ colors }) => {
  return (
    <div className="box-item">
      <Heading
        as="h2"
        size="lg"
        className="heading-sidebar"
      >
        COLORS
      </Heading>
      <RadioGroup colorSchemes={colors} />
    </div>
  );
};

export default Colors;
