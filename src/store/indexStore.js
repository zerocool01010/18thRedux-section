import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'; //configureStore permite crear un Store como createStore, pero lo hace mejor para mergear reducers 
import { configure } from '@testing-library/react';

const initialState = { counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++ //en un slice que es propio del Redux Toolkit, este package trabaja internamente los estados de una manera que los clona y los hace inmutables
                            //asi que si podemos hacerlo de esta manera a pesar de que en el counterReducer recomendamos no hacerlo de esta forma, pero ahi no estamos en toolkit
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
    }
})

const store = configureStore({
    reducer: counterSlice.reducer //nos quedamos con una especie de global reducer que Redux demanda, por eso es singular, y asignamos el sliceReducer de arriba al main reducer de aca
})

export default store

/* const counterReducer = (state = initialState, action) => {
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
} */