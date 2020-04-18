import { v4 as uuidv4 } from 'uuid';

//add expence
export const addExpence = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {} // destructuring the first argument
) => ({
    type: 'ADD_EXPENCE',
    expence: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});
//remove expence

export const removeExpence = ({ id } = {}) => ({  // destructuring the first argument
    type: 'REMOVE_EXPENCE',
    id
});

//edit expence
export const editExpence = (id, updates) => ({
    type: 'EDIT_EXPENCE',
    id,
    updates
});

