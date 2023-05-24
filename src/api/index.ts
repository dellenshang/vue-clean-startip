import { http } from '@/utils/useAxiosApi';
import { AuthApi, ProductApi } from '../api/types';
export const Auth: AuthApi = {
  login: (data) => {
    return http.post('login', data);
  },
  getMenu() {
    return http.get('/profile');
  },
  logout: () => {
    return http.get('/logout');
  }
};
export const Product: ProductApi = {
  storeList: () => {
    return http.get('product/storeList');
  },
  menuList: (id) => {
    return http.get(`product/productList/${id}`);
  },
  addToCart: (id, data) => {
    return http.post(`product/addToCart/${id}`, data);
  },
  mergeCart: (data) => {
    return http.post(`product/mergeCart`, data);
  }
};
