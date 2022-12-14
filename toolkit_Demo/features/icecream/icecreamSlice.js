const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numOfIceCrm: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCrm--
        },
        restocked: (state, action) => {
            state.numOfIceCrm += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCrm--
    //     }
    // }

    extraReducers: (builder) => {
        builder
            .addCase(cakeActions.ordered, (state) => {
                state.numOfIceCrm--
            })
    }

})

module.exports = icecreamSlice.reducer
module.exports.icecreamAction = icecreamSlice.actions