import md5 from 'md5';

/**
 * md5加密
 */
export function md5Encryption(
  message: string | Buffer | number[] | Uint8Array
) {
  const KEY = md5('AIYU KABUSHIKIKAISHA');
  return md5(KEY + md5(message));
}

/**
 * 类型检查
 */

export function typeCheck(param: any) {
  return Object.prototype.toString.call(param);
}

/**
 * 批量修改stage
 */
export function mutateState(state: AnyObject, payload: AnyObject) {
  if (
    typeCheck(state) === '[object Object]' &&
    typeCheck(payload) === '[object Object]'
  ) {
    for (const key in payload) {
      state[key] = payload[key];
    }
  } else {
    console.error('expected plain Object');
  }
}

/**
 * 深拷贝
 * @param obj
 * @returns {Function}
 */
export function deepClone(obj: AnyObject) {
  if (obj === null || typeof obj !== 'object') return obj;
  const newObj = obj instanceof Array ? [] : {};
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      // @ts-ignore
      newObj[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}
