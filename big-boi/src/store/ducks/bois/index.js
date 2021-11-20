import { createReducer, createAction } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const addBoi = createAction("ADD_BOI");
export const addBois = createAction("ADD_BOIS");

export default createReducer(INITIAL_STATE, {
  [addBoi.type]: (state, action) => [...state, action.payload],
  [addBois.type]: (state, action) => [...action.payload],
});
