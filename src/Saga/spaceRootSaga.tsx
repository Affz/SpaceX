import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import * as constants from '../Actions/spaceActions';
import {getSpaceDetails, getSpaceDetailsUsingParams } from './spaceSaga';

export default function* spaceRootSaga() {
    yield all([
        takeEvery(constants.SPACEDETAIL, getSpaceDetails),
        takeEvery(constants.SPACEDETAILBASISOFYEAR , getSpaceDetailsUsingParams)
    ]);

}