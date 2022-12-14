const createSlice = require('@reduxjs/toolkit').createSlice
const createAsynThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')



const initialState = {
    loading: true,
    users: [],
    error: ''
}


//Generte pending, fullfilled or rejected action types.
const fetchUser = createAsynThunk('user/fetchUser', () => {
    return axios.get('http://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user => user.id)))
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false,
            state.users = []
            state.error = action.error.message
        })
    }
})

module.exports = userSlice.reducer
module.exports.fetchUser = fetchUser