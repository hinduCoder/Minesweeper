import { createStore, applyMiddleware } from 'redux'
import reducer, { getInitialState } from './reducer'
import logger from 'redux-logger'
import Cell from './code/Cell'

export interface Store {
    field: Cell[][],
    bombs: number
}

export default createStore(reducer, getInitialState(), applyMiddleware(logger));

