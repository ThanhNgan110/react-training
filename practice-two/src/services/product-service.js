import { URL_API } from '../constants/api';
import { get } from './api-service';

/** Get data product */
export const getProducts = async ({ selectedType, selectedPrice, selectedColor }) => {
  const url = new URL(`${URL_API.BASE_URL}${URL_API.END_POINT_PRODUCTS}`);

  if (selectedType) {
    url.searchParams.set('type', selectedType);
  }

  if (selectedPrice) {
    url.searchParams.set('price', selectedPrice);
  }

  if (selectedColor) {
    url.searchParams.set('color', selectedColor);
  }

  return await get(url);
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
