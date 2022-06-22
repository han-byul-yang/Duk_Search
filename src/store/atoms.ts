import { atom } from 'recoil'

export const searchKeyAtom = atom<string>({
  key: 'searchKey',
  default: '',
})
