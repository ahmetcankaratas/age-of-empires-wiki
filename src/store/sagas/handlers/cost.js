import { put } from "redux-saga/effects";

export default function* costFilterHandler(action) {
  yield put({ type: "COST", payload: action.payload });
  yield put({ type: "FILTER" });
}
