import { URL_API } from '../constants/api';
import { get } from './api-service';

/** Get data product */
export const getProducts = async () => {
  return await get(URL_API.END_POINT_PRODUCTS);
};

export const getProductById = async (id) => {
  return await get(`${URL_API.END_POINT_PRODUCTS}/${id}`);
};

