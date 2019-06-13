import { createStore, combineReducers } from "redux";
import freezerReducer from "./ducks/freezer";
// import ordersReducer from "./ducks/orders"
import {devToolsEnhancer} from "redux-devtools-extension"

// const fakeReducer = (prevState, action) =>({mockInfo:'some information'})

const rootReducer = combineReducers({
    freezer: freezerReducer,
    // orders: ordersReducer,
    // partialState: fakeReducer,

})

export default createStore(rootReducer, devToolsEnhancer());