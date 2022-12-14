const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions 
const icecreamAction = require('./features/icecream/icecreamSlice').icecreamAction

const fetchUser = require('./features/user/userSlice').fetchUser

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(' Updated state', store.getState());
})


store.dispatch(fetchUser())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))


// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.restocked(4))

// unsubscribe()
