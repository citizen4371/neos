export function getDisplayableDaysWithMarkedHazards(
  { days: { entities, idsToShow, mostHazardousIds } } = {}
) {
  try {
    return idsToShow.map(id => ({ ...entities[id], isMostHazardous: mostHazardousIds.includes(id) }));
  } catch (e) {
    return [];
  }
}

export function getDayById(id, state) {
  return state.days.entities[id];
}