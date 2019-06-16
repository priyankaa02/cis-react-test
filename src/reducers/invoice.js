import { userConstants } from '../constants';

export function invoice(state = {}, action) {
  switch (action.type) {
    case userConstants.GETLARGESTINVOICE_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETLARGESTINVOICE_SUCCESS:
      return {
        largestInvoice: action.data
      };
    case userConstants.GETLARGESTINVOICE_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
