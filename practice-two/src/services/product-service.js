// import { URL_API } from '../constants/api';
// import { get } from './api-service';
import {
  productsMock,
  productSettingsMock,
  productMock
} from '../mocks/product';

/** Get data product */
export const getProducts = async () => {
  return {
    data: productsMock
  };
  // return await get(URL_API.END_POINT_PRODUCTS);
};

/** Get data types product */
export const getProductSettings = async () => {
  return {
    data: productSettingsMock
  };
  // return await get(URL_API.END_POINT_SETTING);
};

/** Get product by id (mock data)*/
export const getProductById = async () => {
  return {
    data: productMock
  };
  // return await get(`${URL_API.END_POINT_PRODUCTS}/${id}`);
};

/** Get product by id*/
// export const getProductById = async id => {
//   // return await get(`${URL_API.END_POINT_PRODUCTS}/${id}`);
// };
