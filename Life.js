import React from 'react';
import { Text, View } from 'react-native';
import LifeGrid from './LifeGrid.js'

const Life = () => {
    return (
        <View>
          <LifeGrid columns="3" rows="3" />
        </View>
    )
}

export default Life
