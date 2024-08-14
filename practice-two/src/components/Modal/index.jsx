import clsx from 'clsx';

import Button from '../Button';

import './index.css';

const Modal = ({
  open,
  handleClose,
  className,
  modalHeader,
  modalBody,
  modalFooter
}) => {
  if (!open) {
    return null;
  }

  return (
    <div
      className={clsx('modal-overlay', {
        [className]: !!className
      })}
    >
      <div className="modal-content">
        <Button
          className="btn-close text-align-right"
          iconClassName="icon-close"
          onClick={e => {
            e.preventDefault();
            handleClose();
          }}
        />
        <div className="modal-header">{modalHeader}</div>
        <div className="modal-body">{modalBody}</div>
        <div className="modal-footer">{modalFooter}</div>
      </div>
    </div>
  );
};

export default Modal;
