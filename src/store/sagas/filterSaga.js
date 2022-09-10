import { put, select } from "redux-saga/effects";

export default function* filter() {
  const state = yield select();
  let filteredUnits = state.units;

  function filterCost(name) {
    const resource = name.toLowerCase();
    return filteredUnits.filter((unit) => {
      if (
        state[resource].value[0] === 0 &&
        (unit.cost === null || unit.cost[resource] === undefined)
      ) {
        return true;
      } else {
        return (
          unit.cost &&
          unit.cost[name] >= state[resource].value[0] &&
          unit.cost[name] <= state[resource].value[1]
        );
      }
    });
  }

  if (state.age !== "all") {
    filteredUnits = filteredUnits.filter((unit) => unit.age === state.age);
  }

  if (state.wood.checked) {
    filteredUnits = filterCost("Wood");
  }
  if (state.food.checked) {
    filteredUnits = filterCost("Food");
  }
  if (state.gold.checked) {
    filteredUnits = filterCost("Gold");
  }
  yield put({ type: "SET_FILTERED", payload: filteredUnits });
}
