import mockData from "./mockData/age-of-empires-units.json";

const initialState = {
  units: mockData.units,
  age: "all",
  filteredData: null,
  wood: { checked: true, value: [0, 200] },
  gold: { checked: true, value: [0, 200] },
  food: { checked: true, value: [0, 200] },
};

const filterReducer = (state = initialState, action) => {
  if (action.type === "AGE") {
    return {
      ...state,
      age: action.payload,
    };
  }

  if (action.type === "COST") {
    if (action.payload.checked !== undefined) {
      return {
        ...state,
        [action.payload.resourceName]: {
          checked: action.payload.checked,
          value: state[action.payload.resourceName].value,
        },
      };
    }

    if (action.payload.value) {
      return {
        ...state,
        [action.payload.resourceName]: {
          checked: state[action.payload.resourceName].checked,
          value: action.payload.value,
        },
      };
    }
  }
  if (action.type === "SET_FILTERED") {
    return {
      ...state,
      filteredData: action.payload,
    };
  }

  return state;
};

export default filterReducer;
