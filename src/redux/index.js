import redux, {createStore} from "redux"

export function increment() {
    return {
        type: "INCREMENT"
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

function CounterReducer(count=0,action){
    switch(action.type) {
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
    
}

const store = createStore(CounterReducer)

store.subscribe(() => {
    console.log(store.getState())
})

export default store


