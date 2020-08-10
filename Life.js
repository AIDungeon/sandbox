import React from 'react';
import { Text, View } from 'react-native';
import LifeGrid from './LifeGrid.js'

const Life = () => {
    return (
        <View>
          {/* TODO: Grid Size should be configurable on board reset.
              TODO: It's laggy , see if we can speed things up.
          */}
          <LifeGrid gridSize="50" evolveIntervalInMilliseconds="30" /> 
        </View>
    )
}

// Insert Coffee Break. Stop the Clock.

export default Life
