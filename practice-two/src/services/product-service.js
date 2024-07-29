import { URL_API, QUERY_PARAMETER } from '../constants/api';
import { get } from './api-service';

/** Get data product */
export const getProducts = async (options = {}) => {
  // Convert the options object to a query string
  if (options !== null) {
    const queryString = new URLSearchParams(options).toString();
    const url = `${URL_API.BASE_URL}${URL_API.END_POINT_PRODUCTS}${
      queryString ? `?${queryString}` : ''
    }`;
    return await get(url);
  }
};

/** Get data types product */
export const getProductSettings = async () => {
  return await get(
    `${URL_API.END_POINT_PRODUCTS}/${URL_API.END_POINT_SETTING}`
  );
};

/** Get product by id (mock data)*/
// export const getProductById = async () => {
//   return {
//     data: productMock
//   };
//   // return await get(`${URL_API.END_POINT_PRODUCTS}/${id}`);
// };

/** Get product by category (mock data)*/
export const filterProductByTradeMark = async tradeMark => {
  return await get(
    `${URL_API.BASE_URL}${URL_API.END_POINT_PRODUCTS}${QUERY_PARAMETER.PARAM_TYPE}${tradeMark}`
  );
};
