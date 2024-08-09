export const formatPrice = price => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const getRandomInt = max => {
  return Math.floor(Math.random() * max);
};
