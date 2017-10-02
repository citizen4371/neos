import React from 'react';
import { connect } from 'react-redux';
import { setActiveUnitsKm, setActiveUnitsMl } from 'state/units/actions';
import { units } from 'constants/l10n';
import { UNITS_KM, UNITS_ML } from 'state/constants';

function UnitToggle({ activeUnits, setActiveUnitsKm, setActiveUnitsMl } = {}) {
  const styleKm = activeUnits === UNITS_KM ? styles.active : styles.button;
  const styleMl = activeUnits === UNITS_ML ? styles.active : styles.button;

  return (
    <div>
      <button style={ styleKm } onClick={ setActiveUnitsKm }>{ units.kilometers }</button>
      <button style={ styleMl } onClick={ setActiveUnitsMl }>{ units.miles }</button>
    </div>
  );
}

const styles = {
  button: {
    border: '1px solid white',
    color: 'white',
    background: 'black',
  },
  active: {
    border: '1px solid black',
    color: 'black',
    background: 'white'
  }
};

function mapStateToProps(state) {
  return {
    activeUnits: state.units.active
  }
}

export default connect(mapStateToProps, { setActiveUnitsKm, setActiveUnitsMl })(UnitToggle);