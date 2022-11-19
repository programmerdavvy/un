import {
  GET_LOADER_STATE,UPDATE_LOADER_STATE
} from "./actionTypes"

export const getLoader = () => ({
  type: GET_LOADER_STATE,
})

export const updateLoader = invoice => ({
  type: UPDATE_LOADER_STATE,
  payload: invoice,
})
