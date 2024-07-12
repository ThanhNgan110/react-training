// Import component
import Heading from '../../components/Heading';
import ListGroup from '../../components/ListGroup';
import ListGroupItem from '../../components/ListGroup/ListItem';


// Import css
import './index.css';

const BoxSideColor = () => {
  return (
    <div className="box-item">
      <Heading
        as="h2"
        size="lg"
        className="heading-sidebar"
      >
        COLORS
      </Heading>
    </div>
  );
};

export default BoxSideColor;
