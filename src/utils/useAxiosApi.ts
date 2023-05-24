// @ts-ignore
import qs from 'qs';
import axios from 'axios';

const postForm = <T>(url: string, params: AnyObject): Promise<T> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios({
        method: 'post',
        url,
        data: qs.stringify(params, { arrayFormat: 'indices' }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

const uploadFiles = <T>(url: string, formData: AnyObject): Promise<T> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios({
        method: 'post',
        url,
        data: formData,
        transformRequest: [
          function (data) {
            const formData = new FormData();
            for (const key of Object.keys(data)) {
              if (data[key] instanceof Array && data[key][0] instanceof File) {
                data[key].forEach((e: any) => {
                  formData.append(key, e, e.name);
                });
              } else {
                formData.append(key, data[key]);
              }
            }
            return formData;
          }
        ],
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

const get = <T>(url: string, params?: AnyObject): Promise<T> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const { data, headers } = await axios({
        method: 'get',
        url,
        params: params,
        paramsSerializer: (params) => {
          return qs.stringify(params, { indices: false });
        }
      });
      if (/csv|pdf|octet/g.test(headers['content-type'])) {
        resolve({ data: data, headers: headers } as any);
      } else {
        resolve({ ...data, headers: headers });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const post = <T>(
  url: string,
  params?: AnyObject,
  download?: boolean
): Promise<T> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const { data, headers } = await axios({
        method: 'post',
        url,
        data: params,
        responseType: download ? 'arraybuffer' : 'json'
      });
      if (/csv|pdf|octet/g.test(headers['content-type'])) {
        resolve({ data: data, headers: headers } as any);
      } else {
        resolve({ ...data, headers: headers });
      }
    } catch (e) {
      reject(e);
    }
  });
};

export const http = { get, post, postForm, uploadFiles };
