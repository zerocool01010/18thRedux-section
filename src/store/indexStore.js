import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { configure } from '@testing-library/react';

const initialCounterState = { counter: 0, showCounter: true}
const initialAuthState = {logged: false}

const counterSlice = createSlice({
    name: 'counterRed',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state, action){
            state.counter = state.counter + action.payload 
        },
        toogleCounter(state){
            state.showCounter = !state.showCounter
        }
    }
})

const authSlice = createSlice({
    name: 'authRed',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.logged = true
        }, 
        logout(state){
            state.logged = false
        }
    }
})

const store = configureStore({ //siempre tenemos uno solo de estos, de los configureStore, que nos devuelve un unico reducer que mapea los sliceReducers
    reducer: { counterRed: counterSlice.reducer, authRed: authSlice.reducer }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions 

export default store