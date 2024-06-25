import Button from '../common/Button';
import './index.css';

const ListItem = ({
  children,
  primaryBtnClassName,
  primaryIconClassName,
  secondaryClassName,
  secondaryIconClassName,
}) => {

  return (
    <li className="list-item">
      <div className="flex-row">
        <Button
          iconClassName={primaryIconClassName}
          // className="btn-remove"
          onClick={primaryBtnClassName}
        />
        {children}
      </div>
      <Button
        iconClassName={secondaryIconClassName}
        // className="btn-edit"
        onClick={secondaryClassName}
      />
    </li>
  );
};

export default ListItem;
