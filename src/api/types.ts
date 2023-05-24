import { HttpResponse } from '../utils/types'

export interface LoginParam {
  username: string
  password: string
}

export interface LoginResonse extends HttpResponse {
  data: {
    activeCode: string
    accessToken: string
    tenantId: string
    username: string
    authType: string
  }
}

export interface activateParam {
  oldPassword: string
  newPassword: string
  confirmPassword: string
  rawPassword: string
  userId: string
  tenantId: string
}

export interface SiteInfo {
  siteId: string
  /** pageId */
  appId: string
}

export interface RoleParam extends SiteInfo {
  searchDate: string
}

export interface TreeParam extends SiteInfo {
  /** 默认传1 */
  searchRangeType: number | 1
  /** 可以按照部门检索，不传则会返回全部部门 */
  sectionCode?: string
  searchDate?: string
}

export interface AuthApi {
  /** 登陆 */
  login: (data: LoginParam) => Promise<LoginResonse>,
  /** 菜单 */
  getMenu: () => Promise<HttpResponse>
  /** 退出 */
  logout: () => Promise<HttpResponse>
}


export interface productToCart{
  productId: string,
  num: number,
  sumPrice: number,
  cartItemSecondaryInfoList:secondMenu[]
}
export interface productToCart{
  productId: string,
  num: number,
  cartItemSecondaryInfoList:secondMenu[]
}
export interface storeCart{
  tenantId: string,
  productToCartList:productToCart[]
}
export interface secondMenu{
  secondaryId: string,
  secondaryDetailOptions:string[]
}
export interface ProductApi {
  /** 购物车id */
  cartId?: number,
  /** 商家列表 */
  storeList: () => Promise<HttpResponse>,
  /** 菜单 */
  menuList: (id:string) => Promise<HttpResponse>,
  /** 加入购物车 */
  addToCart: (tenantId:string,data:productToCart) => Promise<HttpResponse>,
  /** 合并购物车 */
  mergeCart: (data:storeCart[]) => Promise<HttpResponse>,
}
