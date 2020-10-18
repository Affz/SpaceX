import { combineReducers } from 'redux';
import SpaceReducer from '../Reducers/spaceReducer';

export const mainReducer = combineReducers({
  spaceReducer: SpaceReducer,
});