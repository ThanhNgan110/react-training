const PAGES = {
  HOME: {
    PATH: '/',
    VALUE: 'Home'
  },
  PRODUCT: {
    PATH: 'products/:id',
    VALUE: 'Product'
  },
  ABOUT: {
    PATH: '#',
    VALUE: 'About Us'
  },
  BAGS: {
    PATH: '#',
    VALUE: 'Bags'
  },
  SNEAKERS: {
    PATH: '#',
    VALUE: 'Sneakers'
  },
  BELT: {
    PATH: '',
    VALUE: 'Belt'
  },
  CONTACT: {
    PATH: '#',
    VALUE: 'Contact'
  },
  INFORMATION: {
    PATH: '#',
    VALUE: ''
  },
  Privacy: {
    PATH: '#',
    VALUE: ''
  },
  Term: {
    PATH: '#',
    VALUE: ''
  }
};

const menus = [
  { path: PAGES.HOME.PATH, value: PAGES.HOME.VALUE },
  { path: PAGES.ABOUT.PATH, value: PAGES.ABOUT.VALUE },
  { path: PAGES.SNEAKERS.PATH, value: PAGES.SNEAKERS.VALUE },
  { path: PAGES.BELT.PATH, value: PAGES.BELT.VALUE },
  { path: PAGES.CONTACT.PATH, value: PAGES.CONTACT.VALUE }
];

export { PAGES, menus };
