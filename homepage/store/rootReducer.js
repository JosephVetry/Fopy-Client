const initialState = {
  mitras: [],
  services: [],
  order: {},
  products: [],
  access_token: "",
  totalPrice : []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchMitraSuccess":
      return {
        ...state,
        mitras: action.payload,
      };

    case "LoginSuccess":
      return {
        ...state,
        access_token: action.payload,
      };

    case "fetchServicesFromMitraSuccess":
      return {
        ...state,
        services: action.payload,
      };

    case "calculateTotalOrder":
      const priceState = {
        ...state,
        totalPrice : state.totalPrice.concat(action.payload),
      }
      return priceState

    case "addToCart":
      const newState = {
        ...state,
        order: action.payload.order,
        products: state.products.concat(action.payload.products),
      };
      return newState;

    default:
      return state;
  }
}

export default rootReducer;
