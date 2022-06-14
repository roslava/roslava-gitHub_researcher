class SaveMyState {

    static saveState(state) {
        try {
            const serialisedState = JSON.stringify(state);
            window.localStorage.setItem('app_state', serialisedState);
        } catch (err) {
        }
    }

    static  loadState = () => {
        try {
            const serialisedState = window.localStorage.getItem('app_state');
            if (!serialisedState) return undefined;
            return JSON.parse(serialisedState);
        } catch (err) {
            return undefined;
        }
    }

    static choseInitialState(initialState, oldState) {
        if (!oldState) {
            return initialState
        } else {
            return oldState
        }
    }
}

export default SaveMyState;