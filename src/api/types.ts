export interface Obj {
  [key: string]: any
}

export interface HttpResponse {
  code: number
  msg: string
  data: Obj | Obj[] | null
}
