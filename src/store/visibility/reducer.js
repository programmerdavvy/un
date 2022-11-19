import {
  GET_LOADER_STATE, UPDATE_LOADER_STATE
} from "./actionTypes"

const INIT_STATE = {
  show: 'none'
}

const Loader = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_LOADER_STATE:
      return {
        ...state,
        loader: action.payload,
      }
    // case UPDATE_INVOICE_SUCCESS:
    //   return {
    //     ...state,
    //     invoices: state.invoices.map(invoice =>
    //       invoice.id.toString() === action.payload.id.toString()
    //         ? { invoice, ...action.payload }
    //         : invoice
    //     ),
    //   }

    case UPDATE_LOADER_STATE:
      return {
        ...state,
        show: action.payload
      }
    default:
      return state
  }
}

export default Loader
