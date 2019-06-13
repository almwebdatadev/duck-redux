import { createStore, combineReducers } from "redux";
import freezerReducer from "./ducks/freezer";

const fakeReducer = (prevState, action) =>({mockInfo:'some information'})

const rootReducer = combineReducers({
    freezer: freezerReducer,
    partialState: fakeReducer,
})

export default createStore(rootReducer);