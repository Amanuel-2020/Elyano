import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import  {composeWithDevTools} from 'redux-devtools-extension'
import {skillReducer } from './Reducers/skillReducer'
import {serviceReducer} from './Reducers/serviceReducer'
import {portfoilReducer} from './Reducers/portfoilReducer'
import {blogReducer} from './Reducers/blogReducer'

const reducer = combineReducers({
    skills: skillReducer,
    services: serviceReducer,
    portfoils: portfoilReducer,
    blogs: blogReducer
})
let initialState = {}

const middleware = [thunk]

const store =  createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store

