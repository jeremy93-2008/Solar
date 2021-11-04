import { createStore } from 'redux'

export interface IPlanets {
    idx: number
    title: string
    description: string
    image: string
    size: number
}

function reducer(state: any[] = [], action: { type: "changeSolarData", payload: IPlanets[] }) {
    switch (action.type) {
        case 'changeSolarData':
            return [ ...action.payload ]
        default:
            return state
    }
}

export const store = createStore(reducer)
