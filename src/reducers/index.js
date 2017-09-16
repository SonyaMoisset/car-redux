import { combineReducers } from 'redux'
import cars from './cars_reducers'
import carDetail from './car_detail'

const rootReducer = combineReducers({
    cars,
    carDetail
})

export default rootReducer