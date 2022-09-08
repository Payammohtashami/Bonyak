import actionTypes from "./actionTypes";
import initialState from "./initialState";

export const request = (state:any, { queryOptions }:any) => ({
  ...state,
  isFetching: true,
  queryOptions,
});

export const receive = (state:any, { data }:any) => ({
  ...state,
  isFetching: false,
  errorMessage: null,
  data,
});

export const initial = () => (
  console.log("initial......................................................."), initialState
);

export const failure = (state:any, { errorMessage }:any) => ({
  ...state,
  isFetching: false,
  errorMessage,
});

const reducer = (state:any = { ...initialState }, action:any) => {
  switch (action.type) {
    case actionTypes.TOAST_RECEIVE:
      return receive(state, action);

    case actionTypes.TOAST_INITIAL:
      return initial();

    case actionTypes.TOAST_FAILURE:
      return failure(state, action);

    default:
      return state;
  }
};

export default reducer;
