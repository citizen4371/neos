import React from 'react';
import { labels } from 'constants/l10n';

function Day({ date, potentiallyHazardousAmount, closest, fastest, maxDiameter, units, isMostHazardous } = {}) {
  const captions = units.captions;
  const style = isMostHazardous ? { ...styles.wrapper, ...styles.hazard } : styles.wrapper;

  return (
    <div style={ style }>
      <div>{ `${labels.date}: ${date}` }</div>
      <div>{ `${labels.hazards}: ${potentiallyHazardousAmount}` }</div>
      <div>{ `${labels.closest}: ${closest[units.active]} ${captions.distance}` }</div>
      <div>{ `${labels.fastest}: ${fastest[units.active]} ${captions.velocity}` }</div>
      <div>{ `${labels.maxDiameter}: ${maxDiameter[units.active]} ${captions.distance}` }</div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    marginTop: -1,
    border: '1px solid white',
    color: 'white',
    fontSize: '0.9em',
    padding: 5,
    zIndex: 1
  },
  hazard: {
    borderColor: 'red',
    zIndex: 2
  }
};

export default Day;