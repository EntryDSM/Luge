import { ADD_COUNT, MINUS_COUNT, SET_COUNT } from "./interface";
import { createAction } from "typesafe-actions";
import { diff } from "../../reducer/test/interface/test";

export const increase = createAction(ADD_COUNT)();
export const decrease = createAction(MINUS_COUNT)();
export const setnumber = createAction(SET_COUNT)<diff>();

export type CountActionType =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof setnumber>;
