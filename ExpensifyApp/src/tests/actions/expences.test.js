import {addExpence, removeExpence, editExpence} from '../../actions/expences';



test("REMOVE expence object", () =>{
    const action = removeExpence({id: '123abc'});
    expect(action).toBe({
        type: 'REMOVE_EXPENCE',
        id: '123abc'
    });
});