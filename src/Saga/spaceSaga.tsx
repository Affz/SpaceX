import { call, put } from 'redux-saga/effects';
import * as constants from '../Actions/spaceActions';
import { SpaceActions } from '../Actions/spaceActions'
import ExternalApi from '../externalApi';

export function* getSpaceDetails(actions: SpaceActions) {
    try {
        var apiParameters = {
            url:'https://api.spacexdata.com/v3/launches?limit=100',
            method: 'GET'
        };
        let response = yield call(ExternalApi.Api, apiParameters);
        yield put({ type: constants.SPACEDETAIL_SUCCESS, payload: response.data });
    } catch (e) {
        var snackbarState = {
            display: true,
            prompt: 'Oops!! Something went wrong'
        };
        yield put({ type: constants.SPACEDETAIL_FAILURE, payload: 'Nothing found' });
    }
}
export function * getSpaceDetailsUsingParams(actions: constants.SpaceDetailBasisOfAll){
    try {
        var URL ="";
        if(actions.payload.launchSuccess !== "" && actions.payload.landingSuccess!== "" && actions.payload.year!== "" ){
            URL='https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success='+actions.payload.launchSuccess +'&amp;land_success='+actions.payload.landingSuccess +'&amp;launch_year=' + actions.payload.year
        } else if(actions.payload.launchSuccess !=="" && actions.payload.landingSuccess !== ""){
            URL='https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success='+actions.payload.launchSuccess +'&amp;land_success='+actions.payload.landingSuccess

        } else if(actions.payload.launchSuccess !== "" ){
            URL='https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success='+actions.payload.launchSuccess
        } else {
            return;
        }
        var apiParameters = {
            method: 'GET',
            url: URL
        };
        let response = yield call(ExternalApi.Api, apiParameters);
        yield put({ type: constants.SPACEDETAILBASISOFYEAR_SUCCESS, payload: response.data });
    } catch (e) {
        var snackbarState = {
            display: true,
            prompt: 'Oops!! Something went wrong'
        };
        yield put({ type: constants.SPACEDETAILBASISOFYEAR_FAILURE, payload: 'Nothing found' });
    }
}