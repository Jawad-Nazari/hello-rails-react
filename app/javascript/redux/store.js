import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

// Initial State
const initialState = {
  greeting: "",
};

// Action Types
const SET_GREETING = "SET_GREETING";

// Action Creators
export const setGreeting = (greeting) => ({
  type: SET_GREETING,
  greeting,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GREETING:
      return { ...state, greeting: action.greeting };
    default:
      return state;
  }
};

// Store Configuration
const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const store = createStore(reducer, applyMiddleware(...middlewares));
  return store;
};

const store = configureStore();

export default store;
