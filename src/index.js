// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from "./store";
import * as flavors from "./constants/icecreams_flavors";
import {actions as actionsFreezer} from "./ducks/freezer";
//import {actions as actionsOrders} from "./ducks/orders";

setInterval(() =>
store.dispatch(actionsFreezer.addIcecream(flavors.FABADA, 5)
,1500)
)

ReactDOM.render(<App />, document.getElementById('root'));
console.log(store.getState());

store.subscribe( () => console.log(store.getState()));
store.dispatch(actionsFreezer.updateTemperature(-9));
// store.dispatch(actions.addIcecream(flavors.FABADA, 33));

