import count from './count'
import favoriteThings from './favoriteThings'
import youtubeVideo from './youtubeVideo'
import user from './user'

const redux = require("redux")
const {combineReducers, createStore} = redux

const rootReducer = combineReducers({
count : count,
favoriteThings: favoriteThings,
youtubeVideo: youtubeVideo,
user: user
})

const store = redux.createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})

export default store


