import { createStore } from "redux";
import rootReducer  from "./rootreducer";


let store = null;

export function getStore() {

	return store;
}

export function initializeStore(initialState) {
	store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

	store.subscribe(() => store.getState());
	return store;
}









