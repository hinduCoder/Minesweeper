import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

export interface Store {
    field: { closed: boolean, bomb: boolean, number: number }[][]
}

export default createStore(reducer, {
    //field: getField()
}, applyMiddleware(logger));

