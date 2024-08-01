import { useState} from 'react';

const useToast = () => {
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });

  const showToast = (msg, type = 'info', duration = 2000) => {
    setAlert({ show: true, type, msg });
    const handler = setTimeout(() => {
      setAlert({ show: false, type: '', msg: '' });
    }, duration);

    return () => clearTimeout(handler);
  };

  return { showToast, alert };
};

export default useToast;
