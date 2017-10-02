import moment from 'moment';
import { FETCH_NEOS, fetchNeos, fetchNeosSuccess, fetchNeosError } from './actions';
import { getDayById } from './selectors';
import { initTimestamp, refreshPeriod, neoFeedUrl, apiKey, dateFormat, enableCache } from 'constants/config';
import { h24 } from 'constants/common';

export default ({ getState, dispatch }) => next => async action => {
  if (action.type === FETCH_NEOS) {
    const date = moment(action.timestamp).format(dateFormat);
    const tomorrowTimestamp = moment().add(1, 'days').startOf('day').valueOf();
    const nextTimestamp = (action.timestamp + h24) % tomorrowTimestamp || initTimestamp;

    setTimeout(() => dispatch(fetchNeos(nextTimestamp)), refreshPeriod);

    try {
      const response = await fetch(`${neoFeedUrl}?start_date=${date}&end_date=${date}&detailed=false&api_key=${apiKey}`);

      dispatch(fetchNeosSuccess(await response.json(), action.timestamp, date));
    } catch (error) {
      dispatch(fetchNeosError(error));
    }
  }

  return next(action);
};