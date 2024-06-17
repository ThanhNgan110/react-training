import Input from '../common/Input';
import Button from '../common/Button';
import './index.css';

const Form = () => {
  return (
    <form className="form">
      <Input type="text" placeHolder="Task Name" className="input-task" />
      <Input type="text" placeHolder="Description" className="input-desc" />
      <div className="btn-group">
        <Button text="Cancel" className="btn-cancel" />
        <Button text="Add Task" className="btn-add" />
      </div>
    </form>
  );
};

export default Form;
