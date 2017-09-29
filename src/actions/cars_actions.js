import {
    SEARCH_CARS,
    CAR_DETAIL,
    CLEAR_DETAIL
} from './types'

const URL_ROOT = `http://localhost:3004`

export const getCars = keywords => {
    const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`, { method: 'GET' })
                    .then(response => response.json())

    return {
        type: SEARCH_CARS,
        payload: request
    }
}

export const carDetail = id => {
    const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`, { method: 'GET' })
                    .then(response => response.json())
    
    return {
        type: CAR_DETAIL,
        payload: request
    }
}

export const clearDetail = () => {
    return {
        type: CLEAR_DETAIL,
        payload: []
    }
}