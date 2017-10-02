import React from 'react';
import { connect } from 'react-redux';
import { getDisplayableDaysWithMarkedHazards } from 'state/days/selectors';
import Day from 'components/Day';

function DayList({ days, units } = {}) {
  return (
    <div style={ styles.wrapper }>
      { days.reverse().map(props => <Day { ...props } units={ units } key={ props.id } />) }
    </div>
  );
}

const styles = {
  wrapper: {
    flex: 'auto',
    height: '100%',
    width: '30%',
    paddingTop: 5
  }
};

function mapStateToProps(state) {
  const units = state.units;

  return {
    days: getDisplayableDaysWithMarkedHazards(state),
    units: {
      active: units.active,
      captions: {
        distance: units.captions.distance[units.active],
        velocity: units.captions.velocity[units.active]
      }
    }
  }
}

export default connect(mapStateToProps)(DayList);