import clsx from 'clsx';
import './index.css';

const Modal = ({ open, className, modalHeader, modalBody, modalFooter }) => {
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
        <div className="modal-header">{modalHeader}</div>
        <div className="modal-body">{modalBody}</div>
        <div className="modal-footer">{modalFooter}</div>
      </div>
    </div>
  );
};

export default Modal;
