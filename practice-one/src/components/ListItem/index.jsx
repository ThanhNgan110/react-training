import Button from '../common/Button';
import './index.css';

const ListItem = ({
  children,
  primaryBtnClassName,
  primaryIconClassName,
  secondaryBtnClassName,
  secondaryIconClassName,
  primaryBtnText,
  secondaryBtnText,
  primaryBtnOnClick,
  secondaryBtnOnClick,
}) => {
  return (
    <li className="list-item">
      <Button
        iconClassName={primaryIconClassName}
        className={primaryBtnClassName}
        onClick={primaryBtnOnClick}
        text={primaryBtnText}
      />
      {children}
      <Button
        iconClassName={secondaryIconClassName}
        className={secondaryBtnClassName}
        onClick={secondaryBtnOnClick}
        text={secondaryBtnText}
      />
    </li>
  );
};

export default ListItem;
