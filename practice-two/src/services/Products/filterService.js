import { URL_API } from '../../constants/api';
import { get } from '../apiService';

/** Get data types product */
export const getProductTypes = async () => {
 return await get(URL_API.END_POINT_SETTING);
};
