import { Obj } from './../types'
import { http } from '../http'

export const User = {
  get: (data: Obj) => {
    return http.get('/api/post', data)
  }
}
