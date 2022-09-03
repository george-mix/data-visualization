import {csv} from 'd3';

export const parseRemoteCSV = async <T>(url: string) => {
  try {
    const data: any = await csv(url);
    return data as T[];
  } catch (error) {
    return Promise.reject(error);
  }
};
