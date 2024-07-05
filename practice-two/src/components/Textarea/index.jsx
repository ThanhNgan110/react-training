import './index.css';

const Textarea = ({ className, value, onChange, placeholder }) => {
  return (
    <>
      <textarea
        className={`textarea ${className}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </>
  );
};

export default Textarea;
