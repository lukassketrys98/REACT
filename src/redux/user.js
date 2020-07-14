


export function setUserDetails(user){
    return{
        type: 'SET_USER_DETAILS',
        payload: user
    }
}


export function removeUser(){
    return{
        type: 'REMOVE_USER',
    }
}

export default function userReducer(user = null, action){
    switch(action.type){
        case 'SET_USER_DETAILS':
            return{
                ...user,
                ...action.payload,
                // firstName: action.payload.user.name,
                // lastName: action.payload.user.surname,
                // id: action.payload.user.id,
                // email: action.payload.user.email,

            }
            case 'REMOVE_USER':
                return null
            
                
            default: 
            return{
                user
            }
    }
}