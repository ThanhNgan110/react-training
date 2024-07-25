import clsx from 'clsx';
import './index.css';

const Modal = ({ className, modalHeader, modalBody, modalFooter }) => {
  return (
    <>
      <div className="modal-overlay show">
        <div
          className={clsx('modal-content', {
            [className]: !!className
          })}
        >
          <div className="modal-header">{modalHeader}</div>
          <div className="modal-body">{modalBody}</div>
          <div className="modal-footer">{modalFooter}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
