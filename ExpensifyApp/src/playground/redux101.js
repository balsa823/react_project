import {createStore} from 'redux';


const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});


const setCount = ({count = 1}) => ({
    type: 'SET',
    count
});

const resetCount = () =>({
    type: 'RESET' 
});

// Reducers 
// 1. Reducers are pure functions
// 2. Never change state and action

let result = ;
const add = () => {
    let a = 10;
    result =  a + b;
};

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});


//Action object - is an object that gets sent to the store
// increment, decrement, reset 

//i'd like to increment count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());


store.dispatch(setCount({count: 4555}));

store.dispatch(decrementCount());


store.dispatch(resetCount());




//store.dispatch(decrementCount({ decrementBy: 1123 }));




//reset the count



