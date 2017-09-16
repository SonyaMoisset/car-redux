const state = {
    name: 'jane',
    lastName: 'doe',
    list: []
}

export default function (state = {}, action) {
    switch (action.type) {
        case 'SEARCH_CARS':
            return {...state, list: action.payload}
        default:
            return state    
    }
}