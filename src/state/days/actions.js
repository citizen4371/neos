export const FETCH_NEOS_SUCCESS = 'FETCH_NEOS_SUCCESS';

export function fetchNeosSuccess(neos, timestamp, date) {
  return {
    type: FETCH_NEOS_SUCCESS,
    neos,
    timestamp,
    date
  }
}

export const FETCH_NEOS_ERROR = 'FETCH_NEOS_ERROR';

export function fetchNeosError(error) {
  return {
    type: FETCH_NEOS_ERROR,
    error
  }
}


export const FETCH_NEOS = 'FETCH_NEOS';

export function fetchNeos(timestamp) {
  return {
    type: FETCH_NEOS,
    timestamp
  }
}