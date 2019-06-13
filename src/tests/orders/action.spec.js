import { actionTypes, actions} from "../../ducks/orders";

describe('placeOrder', () => {

    it('should have the right action type', () => {
        const action = actions.placeOrder({});
        expect(action.type).toEqual(actionTypes.PLACE_ORDER);
    });

    it('should contain the customer name', () => {
        const action = actions.placeOrder({ customer: 'Carpanta_test_name'});
        expect(action.payload.customer).toEqual('Carpanta_test_name');
    });

    it('should contain the date', () => {
        const action = actions.placeOrder({ createdAt: 0});
        expect(action.payload.createdAt).toEqual(0);
    });



    it('should contain whereas a cone is requested', () => {
        const action = actions.placeOrder({ cone: true});
        expect(action.payload.cone).toBeTruthy();
    });

    it('should contain scoops', () => {
        const action = actions.placeOrder({ scoops: 'some scoops'});
        expect(action.payload.scoops).toEqual('some scoops');
    });

    it('should contain a default date', () => {
        const action = actions.placeOrder({});
        expect(typeof action.payload.createdAt).toEqual('number');
    });


})