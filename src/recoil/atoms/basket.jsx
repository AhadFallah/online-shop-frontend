import { atom } from "recoil";

export const basket = atom({
  key: 'basket', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});