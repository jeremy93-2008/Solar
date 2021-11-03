import { createStore } from 'redux'

function reducer(state: any[] = [], action: { type: "changeSolarData", payload: any }) {
    switch (action.type) {
        case 'changeSolarData':
            return [ ...state, ...action.payload ]
        default:
            return state
    }
}

export const store = createStore(reducer)
