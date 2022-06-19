import {createStore} from "redux";
import rootReducer from "./rootreducer";
import SaveMyState from "./SaveMyState/SaveMyState"


let store = null;

export function getStore() {
    return store;
}

export function initializeStore(initialState) {

    const oldState = SaveMyState.loadState()

    store = createStore(rootReducer, SaveMyState.choseInitialState(initialState, oldState), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    store.subscribe(() => store.getState());
    store.subscribe(() => {
        SaveMyState.saveState(store.getState());
    });
    return store;
}









