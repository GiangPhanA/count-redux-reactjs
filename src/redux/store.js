import { createStore } from "redux";
import reducer from "./reducer";

import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools();

// The store holds the data
const store = createStore(reducer,composedEnhancers);
export default store;