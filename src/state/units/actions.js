import { UNITS_KM, UNITS_ML } from 'state/constants';

export const SET_ACTIVE_UNITS = 'SET_ACTIVE_UNITS';

export function setActiveUnits(activeUnits) {
  return {
    type: SET_ACTIVE_UNITS,
    activeUnits
  }
}

export function setActiveUnitsKm() {
  return setActiveUnits(UNITS_KM);
}

export function setActiveUnitsMl() {
  return setActiveUnits(UNITS_ML);
}