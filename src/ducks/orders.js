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
}