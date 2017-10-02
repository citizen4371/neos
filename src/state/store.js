import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import daysMiddleware from './days/middleware';
import daysReducer from './days/reducer';
import unitsReducer from './units/reducer';
import { fetchNeos } from './days/actions';

import { initTimestamp, maxDaysToShow, maxHazardsToMark } from 'constants/config';

const finalCreateStore = compose(
  applyMiddleware(
    daysMiddleware
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(combineReducers({ days: daysReducer, units: unitsReducer }));

store.dispatch(fetchNeos(initTimestamp));

export default store;
