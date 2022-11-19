import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import {
  GET_LOADER_STATE,
  UPDATE_LOADER_STATE,
} from "./actionTypes"

import {
  getLoader, updateLoader
} from "./actions"

//Include Both Helper File with needed methods


function* fetchLoaders() {
  yield call(getLoader);
}

function* onUpdateLoader({ payload: loader }) {
  yield call(updateLoader, loader);
}

function* loaderSaga() {
  yield takeEvery(GET_LOADER_STATE, fetchLoaders)
  yield takeEvery(UPDATE_LOADER_STATE, onUpdateLoader);
}

export default loaderSaga
