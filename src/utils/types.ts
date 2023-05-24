export interface Obj {
  [key: string]: any
}

export interface HttpResponse<T = any> {
  headers: Obj
  code: number
  msg: string
  message: string
  data: T
}
