import { URL_API } from '../constants/api';
import { get } from './api-service';

/** Get data types product */
export const getSettingData = async () => {
  return await get(URL_API.END_POINT_SETTING);
};
