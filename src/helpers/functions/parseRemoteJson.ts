import {json} from 'd3';

export const parseRemoteJson = async <T>(url: string) => {
  try {
    const data = await json<T>(url);
    if (!data) {
      throw new Error('No data resolved!');
    }

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
