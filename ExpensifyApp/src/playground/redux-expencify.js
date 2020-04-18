import {createStore,  combineReducers} from 'redux' ;
import { v4 as uuidv4 } from 'uuid';
//add expence
const addExpence = (
    {
        description = '' , 
        note = '' , 
        amount = 0 , 
        createdAt = 0
    } = {} // destructuring the first argument
    ) =>({
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

const removeExpence = ({ id } = {}) => ({  // destructuring the first argument
    type: 'REMOVE_EXPENCE',
    id
});

//edit expence
const editExpence = (id,updates) => ({
    type: 'EDIT_EXPENCE',
    id,
    updates
});
//set text filter
const setTextFilter = (text = '') => ({
    type: "SET_TEXT",
    text
});
//sort by date
const sortByDate = () => ({
    type: "SORT_BY_DATE"
});
//sort by amount
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});
//set start date
const setStartDate = ( date) => ({
    type: "SET_START_DATE",
    date
});
//set end date
const setEndDate = (date) => ({
    type: "SET_END_DATE",
    date
});
// Expences reducer
const expencesReducerDefaultState = []
const expencesReducer = (state = expencesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENCE':
            return [
                ...state,
                action.expence
            ];
        case 'REMOVE_EXPENCE':
            return state.filter(({id})=>{
                return id !== action.id
            });
        case 'EDIT_EXPENCE':
            return state.map((expence) => {
                if(expence.id == action.id){
                    return {
                        ...expence,
                        ...action.updates
                    }
                }else{
                    return expence
                };
            });
        default:
            return state;
    }
};
const filtersReducerDefaultState = {
    text: '',
    sortBy: '',
    startDate: undefined, 
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: 'date'
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: 'amount'
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.date
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.date
            };
        default:
            return state;
    }
};

// GET VISIBLE EXPENCES

const getVisibleExpences = (expences, {text, sortBy, startDate, endDate}) => {
    return expences.filter((expence)=>{
        const startDateMatch = typeof startDate !== 'number' || expence.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expence.createdAt <= endDate;
        const textMatch = expence.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// STORE CREATION

const store = createStore(
    combineReducers({
        expences: expencesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpences = getVisibleExpences(state.expences, state.filters);
    console.log(visibleExpences);
});

const expenceOne = store.dispatch(addExpence({ description : "Rent", amount: 100, createdAt: 300}));
const expenceTwo = store.dispatch(addExpence({ description: "Coffe", amount: 300, createdAt : 100}));

// store.dispatch(removeExpence({ id : expenceOne.expence.id}));
// store.dispatch(editExpence(expenceTwo.expence.id, {amount: 500}));

//store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter(''));
// //console.log(expenceOne);

// //console.log(store.getState());

store.dispatch(sortByAmount()); // amount
store.dispatch(sortByDate()); // date

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

//store.dispatch(setEndDate(999));


const demoState = {
    expences: [{
        id: 'lkdsjflkasfsd',
        description: 'January rent',
        note: "This was a final payment for that address",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};


const user = {
    name: 'Jen',
    age: 24
};

console.log({
    ...user,
    location: 'Belgrade',
    age: 27
});

