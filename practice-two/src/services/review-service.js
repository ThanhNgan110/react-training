import { URL_API } from '../constants/api';
import { get, post } from './api-service';
import { reviews } from '../mocks/product';

/** Get data reviews by product by id */
export const getReviewsByProductId = async productId => {
  return {
    data: reviews
  };
  // return await get(`${URL_API.END_POINT_REVIEWS}/${productId}`);
};

export const createReviews = async productId => {
  return await post(`${URL_API.END_POINT_REVIEWS}/${productId}`);
};
