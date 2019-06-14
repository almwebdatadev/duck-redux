import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from "./store";
import * as flavors from "./constants/icecreams_flavors";
import { actions as actionsFreezer } from "./ducks/freezer";
import { Provider } from 'react-redux'


setInterval(() =>
    store.dispatch(actionsFreezer.addIcecream(flavors.FABADA, 5)
        , 1500)
)

ReactDOM.render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ), document.getElementById('root')
);
console.log(store.getState());


///// cambiar?¿
store.subscribe(() => console.log(store.getState()));
store.dispatch(actionsFreezer.updateTemperature(-9));

