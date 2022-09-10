import { put, all, select, takeLatest } from "redux-saga/effects";
import ageFilterHandler from "./handlers/age";

function* filter() {
  const state = yield select();
  let filteredUnits = state.units;
  if (state.age !== "all") {
    filteredUnits = filteredUnits.filter((unit) => unit.age === state.age);
  }
  yield put({ type: "SET_FILTERED", payload: filteredUnits });
}

export default function* rootSaga() {
  yield all([
    yield takeLatest("AGE_FILTER", ageFilterHandler),
    yield takeLatest("FILTER", filter),
  ]);
}
