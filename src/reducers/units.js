import { userConstants } from '../constants';

export function units(state = {}, action) {
  switch (action.type) {
    case userConstants.GETLARGESTUNITS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETLARGESTUNITS_SUCCESS:
      return {
        largestUnits: action.data
      };
    case userConstants.GETLARGESTUNITS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
