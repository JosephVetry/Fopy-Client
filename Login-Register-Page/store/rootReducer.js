const initialState = { access_token: ""}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case "LoginSuccess":
            return {
                ...state,
                access_token : action.payload
            }
    
        default:
            return state
    }
}

