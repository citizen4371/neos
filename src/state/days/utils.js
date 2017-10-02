const maxByProp = propName => (val1, val2) => val1[propName] > val2[propName] ? val1 : val2;
export const maxByKm = maxByProp('km');
export const maxByKmh = maxByProp('kmh');

export const extractClosestToSpaceBodyData = (bodyName, item) => {
  const closestData = item.close_approach_data.find(item => item.orbiting_body == bodyName);

  return closestData && {
      distance: {
        km: parseFloat(closestData.miss_distance.kilometers),
        ml: parseFloat(closestData.miss_distance.miles)
      },
      velocity: {
        km: parseFloat(closestData.relative_velocity.kilometers_per_hour),
        ml: parseFloat(closestData.relative_velocity.miles_per_hour)
      }
    };
};

export const extractMaxDiameterData = item => {
  return {
    km: parseFloat(item.estimated_diameter.kilometers.estimated_diameter_max),
    ml: parseFloat(item.estimated_diameter.miles.estimated_diameter_max)
  }
};

export const compareDayIdsByHazards = daysDict => (id1, id2) => {
  const day1 = daysDict[id1];
  const day2 = daysDict[id2];
  const diff = day2.potentiallyHazardousAmount - day1.potentiallyHazardousAmount;

  return diff || day2.timestamp - day1.timestamp;
};