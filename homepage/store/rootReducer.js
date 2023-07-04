const initialState = { mitras: [], services : [] }

function rootReducer (state = initialState, action){
    switch (action.type) {
        case "fetchMitraSuccess":
            return { 
                ...state,
                mitras : action.payload
            }
        case "fetchServicesFromMitraSuccess":
            return{
                ...state,
                services : action.payload
            }

        default:
            return state;
    }
}


export default rootReducer