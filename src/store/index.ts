import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
interface State {
  count: number
}
export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state: State) {
      state.count++
    }
  }
})

export function useStore() {
  return baseUseStore(key)
}
