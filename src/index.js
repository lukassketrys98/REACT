
import './index.css';




import store from "./redux"
import {changeCount} from "./redux/count"
import {setUserDetails,removeUser} from "./redux/user"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount,upvoteVideo, downvoteVideo } from "./redux/youtubeVideo"

store.dispatch(changeCount(42))
store.dispatch(addFavoriteThing("Lukas the CEO"))
store.dispatch(addFavoriteThing("Lukas the CEO22"))
store.dispatch(removeFavoriteThing("Lukas the CEO22"))
store.dispatch(setYouTubeTitle('FUTURE IS HERE'))
store.dispatch(incrementViewCount(4))
store.dispatch(upvoteVideo(10))
store.dispatch(downvoteVideo(2))
store.dispatch(setUserDetails({
   firstName: "Joe",
   lastName: "Schmoe",
   id: 1,
   email: "joe@schmoe.com"
}))

store.dispatch(removeUser())


