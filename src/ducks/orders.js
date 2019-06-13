export const actionTypes = {
    PLACE_ORDER: 'PLACE_ORDER', 
    FULFIL_ORDER: 'FULFIL_ORDER',
    PAY_FOR_ORDER: 'PAY_FOR_ORDER',
    CANCEL_ORDER: 'CANCEL_ORDER'

}


//default state is not needed here

//ACTIONS /////////////////////////
export const actions = {
    placeOrder({customer, createdAt=Date.now(), cone=true, scoops }) {
        return {
            type: actionTypes.PLACE_ORDER,
            payload: {customer, createdAt, cone, scoops }
        }
    },
    fulfilOrder({customer, createdAt=Date.now(), cone=true, scoops }) {
        return {
            type: actionTypes.FULFIL_ORDER,
            payload: {customer, createdAt, cone, scoops }
        }
    },
    payForOrder({customer, createdAt=Date.now(), cone=true, scoops }) {
        return {
            type: actionTypes.PAY_FOR_ORDER,
            payload: {customer, createdAt, cone, scoops }
        }
    },
    cancelOrder({customer, createdAt=Date.now(), cone=true, scoops }) {
        return {
            type: actionTypes.CANCEL_ORDER,
            payload: {customer, createdAt, cone, scoops }
        }
    },
}

//REDUCERS///////////////////////
// export default function reducer(state = DEFAULT_STATE, action) {
//     switch (action.type) {
//         case actionTypes.PLACE_ORDER:
//             return {
//                 ...state,
//                 temperature: action.payload,
//             }
//         // case actionTypes.ADD_ICECREAM:
//         //     const newAmount=
//         //     action.payload.amount + (state.icecreams[action.payload.flavor] || 0);
//         //     return {
//         //         ...state,
//         //         icecreams: {
//         //             ...state.icecreams,
//         //             [action.payload.flavor]: Math.min(newAmount, MAX_AMOUNT_PER_ICECREAM),
//         //         }
//         //     }

//         default:
//             return state;
//     }

// }