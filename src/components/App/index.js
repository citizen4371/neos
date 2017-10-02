import React from 'react';
import DayList from 'components/DayList';
import UnitToggle from 'components/UnitToggle';

function App() {
  return (
    <div style={ styles.wrapper }>
      <UnitToggle />
      <DayList />
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: 'white',
    backgroundColor: '#191818'
  }
};

export default App;
