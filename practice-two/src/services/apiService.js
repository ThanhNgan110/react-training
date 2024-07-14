import axios from 'axios';
import { URL_API } from '../constants/api';

const api = axios.create({
  baseURL: URL_API.BASE_URL
});

/**
 * Get Api
 * @param {string} endPoint -- The endpoint api
 * @return {object} -- success and data or error and empty data
 */
export const get = async endPoint => {
  try {
    const res = await api.get(endPoint);
    if (res.status >= 200 && res.status < 300) {
      return {
        isError: false,
        data: res.data
      };
    }
  } catch (error) {
    return {
      isError: true,
      data: ''
    };
  }
};

/**
 * Post Api
 * @param {string} endPoint -- The endpoint api
 * @param {string} payload -- The payload contain data
 * @return {object} -- success and data or empty data
 */
export const post = async (endPoint, payload) => {
  try {
    const res = await api.post(endPoint, payload);
    if (res.status >= 200 && res.status < 300) {
      return {
        isError: false
      };
    }
  } catch (error) {
    return {
      isError: true
    };
  }
};
