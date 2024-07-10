import './index.css';

const Heading = ({ className, tag, heading }) => {
  const Tag = tag;

  return <Tag className={`heading ${className}`}>{heading}</Tag>;
};

export default Heading;
