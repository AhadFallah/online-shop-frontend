import { atom } from "recoil";

export const token = atom({
  key: 'token', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});