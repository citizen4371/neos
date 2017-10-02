import { SET_ACTIVE_UNITS } from './actions'
import { units } from 'constants/l10n';
import { UNITS_KM } from 'state/constants';

const initState = {
  active: UNITS_KM,
  captions: {
    velocity: {
      km: units.kmh,
      ml: units.mlh
    },
    distance: {
      km: units.km,
      ml: units.ml
    }
  }
};

export default function unitsReducer(state = initState, action) {
  return action.type === SET_ACTIVE_UNITS
    ? { ...state, active: action.activeUnits }
    : state;
}