import {createStore, combineReducers,applyMiddleware} from 'redux'
import {postReducer} from '../store/reducers/postReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    post:postReducer
})
export const store =  createStore(rootReducer,applyMiddleware(thunk))
