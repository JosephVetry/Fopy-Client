const initialState = { 
    mitras: [], services : [], 
    order: {}, products: [] 
}

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
            
        case "addToCart":
            const newState = {
                ...state,
                order : action.payload.order,
                products : state.products.concat(action.payload.products)
            }
            console.log(newState.products, newState.order, 'ini di reducer')
            return newState

        default:
            return state;
    }
}


export default rootReducer