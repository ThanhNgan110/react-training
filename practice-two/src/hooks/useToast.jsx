import { useState } from 'react';

import { VARIABLES } from '../constants/variable';

const useToast = () => {
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });

  const showToast = (
    msg,
    type = 'info',
    duration = VARIABLES.DURATION_ALERT
  ) => {
    setAlert({ show: true, type, msg });
    const handler = setTimeout(() => {
      setAlert({ show: false, type, msg });
    }, duration);

    return () => clearTimeout(handler);
  };

  return { showToast, alert };
};

export default useToast;
