import { atom } from "recoil";

export const category = atom({
  key: 'category', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});