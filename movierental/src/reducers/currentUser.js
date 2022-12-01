const currentUser = (state = {},action) => {
    if (action.type == "SET_USER"){
        return{
            ...state,
            user:action.payload,
            loggedIn: true
        }
    }else{
        return state;
    }
}

export default currentUser;