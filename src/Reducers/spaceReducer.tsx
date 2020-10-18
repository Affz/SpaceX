import * as constants from '../Actions/spaceActions'
import SpaceState from '../State/spaceState';

export default function SpaceReducer(state: SpaceState = { spaceDefault: [], filterAllResults:[], }, action: any) {
    switch (action.type) {
        case constants.SPACEDETAIL_SUCCESS: {
            return { ...state, details: action.payload };
        }
        case constants.SPACEDETAILBASISOFYEAR: {
            return {...state, filterLoader: true}
        }
        case constants.SPACEDETAILBASISOFYEAR_SUCCESS: {
            return { ...state, filteredAllResults: action.payload , filterLoader: false};
        }
        case constants.SPACEDETAILBASISOFYEAR_FAILURE: {
            return {...state, filterLoader: false}
        }
        default:
            return { ...state };
    }
}