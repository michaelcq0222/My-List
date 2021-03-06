import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../Reducer";
import thunk from "redux-thunk";
/*To create the store and apply middleware here*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
