import './index.css';

const Form = ({ handleSubmit, content, footer }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-content">{content}</div>
      <div className="form-footer">{footer}</div>
    </form>
  );
};

export default Form;
