import { URL_API } from '../constants/api';
import { get, post } from './api-service';

/** Get data reviews by product by id */
export const getReviewsByProductId = async productId => {
  return await get(`${URL_API.END_POINT_REVIEWS}/${productId}`);
};

/** Post data reviews by product by id */
export const createReviews = async payload => {
  return await post(URL_API.END_POINT_REVIEWS, payload);
};
