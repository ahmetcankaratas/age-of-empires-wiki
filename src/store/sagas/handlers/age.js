import { put } from "redux-saga/effects";

export default function* ageFilterHandler(action) {
  yield put({type: 'AGE', payload: action.payload});
  yield put({type: 'FILTER'});
}
