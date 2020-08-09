import React from 'react';
import { Text, View } from 'react-native';
import LifeGrid from './LifeGrid.js'

const Life = () => {
    return (
        <View>
          {/* TODO: Grid Size should be configurable on board reset  */}
          <LifeGrid gridSize="10" evolveIntervalInMilliseconds="1000" /> 
        </View>
    )
}

export default Life
