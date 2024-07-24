// import { URL_API } from '../constants/api';
// import { get } from './api-service';
import { reviews } from '../mocks/product';

/** Get data product */
export const getReviews = async () => {
  return {
    data: reviews
  };
  // return await get(URL_API.END_POINT_PRODUCTS);
};
