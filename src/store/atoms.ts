import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'storeDatas',
  storage: localStorage,
})

export const searchKeyAtom = atom<string>({
  key: 'searchKey',
  default: '',
})

export const searchKeyListAtom = atom<string[] | undefined>({
  key: 'searchKeyList',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
