import mockData from "./mockData/age-of-empires-units.json";

const initialState = {
  units: mockData.units,
  age: "all",
  filteredData: null,
};

const filterReducer = (state = initialState, action) => {
  if (action.type === "AGE") {
    return {
      ...state,
      age: action.payload,
    };
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
