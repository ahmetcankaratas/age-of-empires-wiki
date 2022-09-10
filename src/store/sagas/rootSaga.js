import { all, takeLatest } from "redux-saga/effects";
import ageFilterHandler from "./handlers/age";
import costFilterHandler from "./handlers/cost";
import filter from "./filterSaga";

export default function* rootSaga() {
  yield all([
    yield takeLatest("AGE_FILTER", ageFilterHandler),
    yield takeLatest("COST_FILTER", costFilterHandler),
    yield takeLatest("FILTER", filter),
  ]);
}
