const getLocalStorage = (item) => {
  return localStorage.getItem(item);
};

const setLocalStorage = (item, updatedTask) => {
  return localStorage.setItem(item, updatedTask);
};

export { getLocalStorage, setLocalStorage };
