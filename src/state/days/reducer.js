import { FETCH_NEOS_SUCCESS, FETCH_NEOS_ERROR } from './actions'
import { initTimestamp, maxDaysToShow, maxHazardsToMark } from 'constants/config';
import { h24, earth } from 'constants/common';
import { range, insertOrdered } from 'utils/common';
import {
  maxByKm,
  maxByKmh,
  extractClosestToSpaceBodyData,
  extractMaxDiameterData,
  compareDayIdsByHazards
} from './utils';


const initState = {
  maxToShow: maxDaysToShow,
  maxHazardsToMark,
  error: null,
  initTimestamp,
  currentTimestamp: initTimestamp,
  entities: {},
  idsToShow: [],
  mostHazardousIds: []
};

export default function daysReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_NEOS_SUCCESS:
      const { date, timestamp } = action;
      const dayId = timestamp;

      const dayData = (action.neos.near_earth_objects[date] || []).reduce((acc, item) => {
        const closestToEarthData = extractClosestToSpaceBodyData(earth, item);

        return {
          ...acc,
          potentiallyHazardousAmount: acc.potentiallyHazardousAmount + Number(item.is_potentially_hazardous_asteroid),
          closest: closestToEarthData ? maxByKm(acc.closest, closestToEarthData.distance) : acc.closest,
          fastest: closestToEarthData ? maxByKm(acc.fastest, closestToEarthData.velocity) : acc.fastest,
          maxDiameter: maxByKm(acc.maxDiameter, extractMaxDiameterData(item))
        }
      }, {
        id: dayId,
        timestamp,
        date,
        potentiallyHazardousAmount: 0,
        closest: { km: 0, ml: 0 },
        fastest: { km: 0, ml: 0 },
        maxDiameter: { km: 0, ml: 0 }
      });

      const entities = { ...state.entities, [dayId]: dayData };
      const idsToShow = [ ...state.idsToShow, timestamp ].slice(-6);

      return {
        ...state,
        entities,
        currentTimestamp: timestamp,
        idsToShow,
        mostHazardousIds: idsToShow
          .filter(id => entities[id].potentiallyHazardousAmount)
          .sort(compareDayIdsByHazards(entities))
          .slice(0, state.maxHazardsToMark)
      };
    case FETCH_NEOS_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}