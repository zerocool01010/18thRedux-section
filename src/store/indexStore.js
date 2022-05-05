import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true}

createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state, action){
            state.counter = state.counter + action.amount
        },
        toogleCounter(state){
            state.showCounter = !state.showCounter
        }
    },
    decrement() {},
    increase() {},
    toogleCounter() {},
})

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        //SIEMPRE que estemos trabajando con useReducer o reducer functions, tener en cuenta lo siguiente:
        //NUNCA modificar haciendo algo como esto: state.counter++
        return { //SIEMPRE retornar un objeto que reemplace el objeto existente
            counter: state.counter +1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'decrease') {
        return {
            counter: state.counter - action.amount,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter -1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }
    return state
}

const store = createStore(counterReducer)

export default store