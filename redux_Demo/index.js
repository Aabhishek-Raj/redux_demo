
const redux = require('redux')


console.log('hai there');

const CAKE_ORDER = 'CAKE_ORDER'

function order() {  // Action creater
    return {
        type: CAKE_ORDER, // Action / must have a type value
        quantity: 1 
    }
}

const initialState = () => {  //state of the app
    numberOfCake = 10
}

const reducer = (state = initialState, action) => {   //   (pevstate, action) = new State
    switch(action.type){
        case CAKE_ORDER:
        return {
            ...state,
            numberOfCake: state.numberOfCake - 1
        }
        default:
            return state
    }
} 

const store = createStore(reducer)

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(order())
store.dispatch(order())
store.dispatch(order())

unsubscribe()
